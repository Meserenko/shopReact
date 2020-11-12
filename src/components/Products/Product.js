import React from "react";
import './Product.css'
import { Link } from "react-router-dom";


const Product = ({ product, onAddToCartClicked, onLoadItemClicked }) => {
    return (
        <div className='product'>
            <img
                className='product_image'
                src={product.image}
                alt={product.title}
            />
            <div className='about_product'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <b>{product.price} &#36;</b><br/>

                <button className='buttons_btn' onClick={onAddToCartClicked}>
                    Add To Cart
                </button>
                <Link to={`/product/${product.id}`}>
                    <button className='buttons_btn' onClick={onLoadItemClicked}>
                        More info
                    </button>
                </Link>
            </div>
        </div>
    );
};



export default Product;
