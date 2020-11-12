import React from 'react';
import './Cart.css'
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
                                    <p>
                                        <b>Quantity: {item.quantity}</b>
                                    </p>
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