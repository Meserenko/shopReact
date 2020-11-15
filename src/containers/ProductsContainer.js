import React from 'react'
import { connect } from 'react-redux'
import {addToCart, loadCurrentItem} from '../actions/shoppingActions'
import Product from '../components/Products/Product'
import Products from "../components/Products/AllProducts";



const ProductsContainer = ({ products, addToCart, loadCurrentItem }) => (
    <Products title="Products">
        {products.map(product =>
            <Product
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}
                onLoadItemClicked={() => loadCurrentItem(product)}/>
        )}
    </Products>
)


const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)
