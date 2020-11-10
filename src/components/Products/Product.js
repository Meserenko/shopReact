import React from "react";
import './Product.css'
import { FaDollarSign } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    addToCart,
    loadCurrentItem
} from "../../actions/shoppingActions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
    return (
        <div className='product'>
            <img
                className='product_image'
                src={product.image}
                alt={product.title}
            />
            <div className='about_product'>
                <h2>{product.title}</h2>
                <p >{product.description}</p>
                <p><FaDollarSign/><b>{product.price}</b></p>

                <button
                    className='buttons_btn buttons_add'
                    onClick={() => addToCart(product.id)}
                >
                    Add To Cart
                </button>
                <Link to={`/product/${product.id}`}>
                <button
                    className='buttons_btn buttons_add'
                    onClick={() => loadCurrentItem(product)}
                >
                    More info
                </button>
            </Link>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    };
};

export default connect(null, mapDispatchToProps)(Product);
