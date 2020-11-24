import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import NotificationBadge from 'react-notification-badge';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const Nav = (props) => {


    return(
        <div className='navbar'>
            <Link to="/" className='logo'>
                <h3 className='navbar_logo'><FontAwesomeIcon icon={faReact}/>React<span>Shop</span></h3>
            </Link>
            <Link to="/" className='navbar_link'>
                <h3 className='navbar_logo'>Products</h3>
            </Link>
            <Link to='/cart' className='navbar_link'>
                <div className='navbar_cart' >
                    <FontAwesomeIcon icon={faShoppingCart} className='cart_image'/>
                    <NotificationBadge className='cart_counter' count={props.count} effect={[null, null, {top:'-5px'}, {top:'0px'}]}/>
                </div>
            </Link>
        </div>
    )

}




export default Nav;