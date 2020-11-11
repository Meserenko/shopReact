import React from "react";
import './MoreAboutProduct.css'

const MoreAboutProduct = ({ current, onAddToCartClicked }) => {
    return (
        <div className='wrapperMoreAboutProduct'>
            <div className= 'moreAboutProduct'>
                <img
                    className='item_img'
                    src={current.image}
                    alt={current.title}
                />
                <div className='about_product'>
                    <h1>{current.title}</h1>
                    <p>{current.fullDescription}</p>
                    <b>$ {current.price}</b>
                    <button className='buttons_btn'
                        onClick={onAddToCartClicked}

                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};


export default MoreAboutProduct