import React from 'react';
import './Cart.css'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
const Cart = (props) =>{

        let addedItems = props.products.length ?
            (
               props.products.map(item=>{
                    return(
                            <div className="cartProduct" key={item.id}>
                                <div className="cartAboutProduct">
                                    <img src={item.image} alt={item.image}/>
                                        <b>{item.title}</b>
                                    <div>
                                        <TiArrowDownOutline className="arrows" onClick={()=>props.subtractQuantity(item.id)}>arrow_drop_down</TiArrowDownOutline>
                                        <b>{item.quantity}</b>
                                        <TiArrowUpOutline className="arrows" onClick={()=>props.addQuantity(item.id)}>arrow_drop_up</TiArrowUpOutline>
                                        </div>
                                        <b>{item.price*item.quantity}$</b>
                                    <button className="removeButton" onClick={() => props.removeFromCart(item.id)}>Remove From Cart</button>
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
        return(
            <div  className='cartAndTotal'>
                    <div>
                        {addedItems}
                    </div>
                    <div className='total'>
                        <h1>Cart:</h1>
                        <h2>Total: {props.total} &#36;</h2>
                        <button className='buttons_btn'>Checkout</button>
                    </div>
            </div>
        )
    }


export default Cart