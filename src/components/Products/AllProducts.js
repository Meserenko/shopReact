import React from "react";
import './AllProducts.css'
import PropTypes from 'prop-types'

const Products = ({ title, children }) => {
    return (
        <div className='wrapper'>
            <h1>{title}</h1>
            <div className='products'>
                {children}
            </div>
        </div>
    );
};

Products.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}


export default Products;
