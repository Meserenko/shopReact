import * as types from "../constants/shoppingConstants";
import shop from "../api/shop";

export const addToCart = (id) => {
    return {
        type: types.ADD_TO_CART,
        id
    };
};

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})


export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}


export const removeFromCart = (id) => {
    return {
        type: types.REMOVE_FROM_CART,
        id
    };
};

export const loadCurrentItem = (product) => {
    return {
        type: types.LOAD_CURRENT_ITEM,
        product,
    };
};

export const subtractQuantity=(id)=>{
    return{
        type: types.SUB_QUANTITY,
        id
    }
}
export const addQuantity=(id)=>{
    return{
        type: types.ADD_QUANTITY,
        id
    }
}

export const orderProducts=(products,sort)=> {
    return {
        type: types.ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            products: products,
        }
    }
}



export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
        products.sort((a, b) =>
                sort === "lowestprice"
                ? a.price > b.price
                ? 1
                : -1
                : sort === "highestprice"
                ? a.price < b.price
                ? 1
                : -1
                : sort === "atoz"
                ? a.title > b.title
                ? 1
                : -1
                : sort === "ztoa"
                ? a.title < b.title
                ? 1
                : -1
                : null
        );
    } else {
        products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch(orderProducts(products, sort))
}

export const searchProduct = text => dispatch => {
    dispatch({
        type: types.SEARCH_PRODUCT,
        text
    });
};