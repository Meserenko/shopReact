import { connect } from 'react-redux';
import {removeFromCart, addQuantity, subtractQuantity, checkout} from '../actions/shoppingActions';
import Cart from '../components/Cart/Cart';


const mapStateToProps = (state)=>{
    return{
        products: state.cart,
        total: state.total,
        cart: state.cart,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id) =>{dispatch(removeFromCart(id))},
        addQuantity: (id) =>{dispatch(addQuantity(id))},
        subtractQuantity: (id) =>{dispatch(subtractQuantity(id))},
        checkout: (products) => { dispatch(checkout(products))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
