import React from 'react';
import './Cart.css'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            total: this.props.total,
            submit: false,
            discount: this.props.discount
        }

    }

    handleChange = e => {
        this.setState({
                code: e.target.value
         })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.code === 'discount') {
            this.setState({
                total: this.props.total - this.props.discount,
                submit: true
            })
            alert("Success! You have 20% discount")
        } else {
            alert("Error! Promocode is invalid")
        }
    }
    render() {
        let addedItems = this.props.products.length ?
            (
                this.props.products.map(item => {
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
                                                    onClick={() => this.props.subtractQuantity(item.id)}>arrow_drop_down</TiArrowDownOutline>
                                <b>{item.quantity}</b>
                                <TiArrowUpOutline className="arrows"
                                                  onClick={() => this.props.addQuantity(item.id)}>arrow_drop_up</TiArrowUpOutline>
                            </div>
                            <div className='subtotal'>
                                <b>{item.price * item.quantity}$</b>
                            </div>
                            <div className='remove'>
                                <FontAwesomeIcon icon={faTimes} className="removeButton"
                                                 onClick={() => this.props.removeFromCart(item.id)}>Remove From
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
                            <b className='total-items'>{this.props.cart.length} Products in your Bag</b>
                        </div>
                        {addedItems.length ?
                            <div>
                                {this.state.submit === true ?
                                    <div className='summary-total'>
                                        <div className='total-title'>Total</div>
                                        <div id='basket-total' className='total-value final-value'><b className='discount'>{this.props.total}$</b>  <b>{this.props.total - this.props.discount}$</b>
                                        </div>
                                    </div>
                                    :
                                    <div className='summary-total'>
                                        <div className='total-title'>Total</div>
                                        <div id='basket-total' className='total-value final-value'><b>{this.props.total}$ </b></div>
                                    </div>
                                }
                                <form action="" onSubmit={this.handleSubmit} className='discount-form'>
                                    <input type="text" className='promocode-input' onChange={this.handleChange} placeholder='Use promocode'/>
                                    <button type='submit' className='buttons_btn' disabled={(this.state.submit ? true : false)}>Activate</button>
                                </form>
                                <Link to='/form'>
                                    <div className='summary-checkout'>
                                        <button className='checkout-button buttons_btn'
                                                onClick={() => this.props.checkout()}>Checkout
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            : <p className='products-not-found'><b>Products not found</b></p>
                        }
                    </div>
                </aside>
            </div>

        )
    }

}
export default Cart;