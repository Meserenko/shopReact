import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/shoppingActions";
import MoreAboutProduct from "../components/MoreAboutProduct/MoreAboutProduct";

const MoreAboutProductContainer = ({ current ,addToCart }) => (
    <MoreAboutProduct
    key={current.id}
    current={current}
    onAddToCartClicked={() => addToCart(current.id)}
    />
)

const mapStateToProps = (state) => {
    return {
        current: state.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreAboutProductContainer);