import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/shoppingActions'
import Cart from '../components/Cart/Cart'



const mapStateToProps = (state)=>{
    return{
        products: state.cart,
        total:  state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
