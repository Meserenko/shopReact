import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    LOAD_CURRENT_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    RECEIVE_PRODUCTS,
    ORDER_PRODUCTS,
    CHECKOUT_PRODUCTS,
} from '../constants/shoppingConstants';

const initialState = {
    products: [],
    filteredProducts: [],
    sort: "",
    cart: [],
    total: 0,
    discount: 0,
    currentItem: null,
};

const shopReducer = (state = initialState, action) => {
    const discount = 20 / 100;
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.products,
                filteredProducts: action.products
            }
        case ADD_TO_CART:
            let addedItem = state.products.find(item => item.id === action.id)
            let existedItem= state.cart.find(item => action.id === item.id)
            if(existedItem)
            {
                addedItem.quantity += 1
                return{
                    ...state,
                    total: state.total + addedItem.price,
                    discount: state.total * discount
                }
            }
            else{
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price

                return{
                    ...state,
                    cart: [...state.cart, addedItem],
                    total : newTotal,
                    discount: newTotal * discount
                }

            }
        case REMOVE_FROM_CART:
            let itemToRemove= state.cart.find(item => action.id === item.id)
            let newItems = state.cart.filter(item => action.id !== item.id)

            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            return{
                ...state,
                cart: newItems,
                total: newTotal,
                discount: newTotal * discount
            };
        case CHECKOUT_PRODUCTS:
            return {
                ...state,
                cart: initialState.cart,
                total: initialState.total,
                discount: initialState.discount
            }
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.product,
            }
        case ADD_QUANTITY:
            let addItemQuantity = state.products.find(item => item.id === action.id)
            addItemQuantity.quantity += 1
            let newTotalSum = state.total + addItemQuantity.price
            return{
                ...state,
                total: newTotalSum,
                discount: newTotalSum * discount
            }
        case SUB_QUANTITY:
            let subItemQuantity = state.products.find(item => item.id === action.id)
            if(subItemQuantity.quantity === 1){
                let newItems = state.cart.filter(item => item.id !== action.id)
                let newTotal = state.total - subItemQuantity.price
                return{
                    ...state,
                    cart: newItems,
                    total: newTotal,
                    discount: newTotal * discount
                }
            }
            else {
                subItemQuantity.quantity -= 1
                let newTotal = state.total - subItemQuantity.price
                return{
                    ...state,
                    total: newTotal,
                    discount: newTotal * discount
                }
            }
        case ORDER_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload.products,
                sort: action.payload.sort,
            };
        default:
            return state;
    }
};

export default shopReducer;
