import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import { FaShoppingCart } from 'react-icons/fa'
import NotificationBadge from 'react-notification-badge';
class Nav extends React.Component{
constructor() {
    super();
    this.state = {
        count: 0
    }
}


render() {
    return(
        <div className='navbar'>
            <Link to="/" className='navbar_link'>
                <h3 className='navbar_logo'>Products</h3>
            </Link>
            <Link to="/cart" className='navbar_link'>
                <h3 className='cart_title'>Cart</h3>
            </Link>
            <Link to='/cart' className='navbar_link'>
                <div className='navbar_cart' >
                    <FaShoppingCart className='cart_image'/>
                    <NotificationBadge count={this.state.count} effect={[null, null, {top:'-5px'}, {top:'0px'}]}/>
                </div>
            </Link>
        </div>
    )
}
};




export default Nav;