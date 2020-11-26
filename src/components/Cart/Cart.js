import React from 'react';
import './Cart.css'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Cart = (props) => {
        let addedItems = props.products.length ?
            (
                props.products.map(item => {
                    return (
                        <div className="basket-product" key={item.id}>
                            <div className='item'>
                                <div className='product-image'>
                                    <img src={item.image} alt={item.image} className='cart-image'/>
                                </div>
                                <div className='product-details'>
                                    <b>{item.title}</b>
                                </div>
                            </div>
                            <div className='price'>
                                <b>{item.price}$</b>
                            </div>
                            <div className='quantity'>
                                <TiArrowDownOutline className="arrows"
                                                    onClick={() => props.subtractQuantity(item.id)}>arrow_drop_down</TiArrowDownOutline>
                                <b>{item.quantity}</b>
                                <TiArrowUpOutline className="arrows"
                                                  onClick={() => props.addQuantity(item.id)}>arrow_drop_up</TiArrowUpOutline>
                            </div>
                            <div className='subtotal'>
                                <b>{item.price * item.quantity}$</b>
                            </div>
                            <div className='remove'>
                                <FontAwesomeIcon icon={faTimes} className="removeButton"
                                                 onClick={() => props.removeFromCart(item.id)}>Remove From
                                    Cart</FontAwesomeIcon>
                            </div>
                        </div>
                    )
                })
            )
            :
            (
                <div className='cart'>
                    <h1>You have ordered:</h1>
                    <p>Nothing. Please add some products to cart.</p>
                </div>
            )
        return (
            <div className='productsAndTotal'>
                <div className='basket'>
                    <div className='basket-labels'>
                        <ul className='basket-labels-ul'>
                            <li className="item item-heading">Product</li>
                            <li className="price">Price</li>
                            <li className="quantity">Quantity</li>
                            <li className="subtotal">Total</li>
                        </ul>
                    </div>
                    {addedItems}
                </div>
                <aside>
                    <div className='summary'>
                        <div className='summary-total-items'>
                            <b className='total-items'>{props.cart.length} Products in your Bag</b>
                        </div>
                        <div className='summary-total'>
                            <div className='total-title'>Total</div>
                            <div id='basket-total' className='total-value final-value'><b>{props.total}$</b></div>
                        </div>
                        <div className='summary-checkout'>
                            <button className='checkout-button buttons_btn' onClick={() => props.checkout()}>Checkout</button>
                        </div>
                    </div>
                </aside>
            </div>
        )
}

export default Cart;