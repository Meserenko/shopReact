import React from 'react';
import './Cart.css'
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti'
const Cart = (props) =>{

        let addedItems = props.products.length ?
            (
               props.products.map(item=>{
                    return(
                        <div className='products'>
                            <div className="cartProduct" key={item.id}>
                                <div >
                                    <img src={item.image} alt={item.image}/>
                                </div>
                                <div className="about_product">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <b>Price: {item.price}$</b>
                                    <div className='quantity'>
                                        <TiArrowDownOutline className="arrows" onClick={()=>props.subtractQuantity(item.id)}>arrow_drop_down</TiArrowDownOutline>
                                        <p>
                                            <b>Quantity: {item.quantity}</b>
                                        </p>
                                        <TiArrowUpOutline className="arrows" onClick={()=>props.addQuantity(item.id)}>arrow_drop_up</TiArrowUpOutline>
                                    </div>
                                    <button className="removeButton" onClick={() => props.removeFromCart(item.id)}>Remove From Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
            :
            (
                <p>Nothing. Please add some products to cart.</p>
            )
        return(
            <div className='cart'>
                <div>
                    <h1>You have ordered:</h1>
                    <div>
                        {addedItems}
                        <h2>Total: {props.total} &#36;</h2>
                    </div>
                </div>
            </div>
        )
    }


export default Cart