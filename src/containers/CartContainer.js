import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, addQuantity, subtractQuantity } from '../actions/shoppingActions'
import Cart from '../components/Cart/Cart'



const mapStateToProps = (state)=>{
    return{
        products: state.cart,
        total:  state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id) =>{dispatch(removeFromCart(id))},
        addQuantity: (id) =>{dispatch(addQuantity(id))},
        subtractQuantity: (id) =>{dispatch(subtractQuantity(id))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
