import React from "react";
import './MoreAboutProduct.css'
import { connect } from "react-redux";
import { addToCart, loadCurrentItem } from "../../actions/shoppingActions";

const MoreAboutProduct = ({ current, addToCart }) => {
    return (
        <div className= 'moreAboutItem'>
            <img
                className='item_img'
                src={current.image}
                alt={current.title}
            />
            <div className='product_details'>
                <h1 >{current.title}</h1>
                <p>{current.description}</p>
                <p><b>$ {current.price}</b></p>
                <button
                    onClick={() => addToCart(current.id)}

                >
                    Add To Cart
                </button>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        current: state.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreAboutProduct);
