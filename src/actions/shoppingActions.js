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
