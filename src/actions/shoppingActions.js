import * as types from "../constants/shoppingConstants";

export const addToCart = (id) => {
    return {
        type: types.ADD_TO_CART,
        id
    };
};

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
