import React from 'react'
import { connect } from 'react-redux'
import {addToCart, loadCurrentItem} from '../actions/shoppingActions'
import Product from '../components/Products/Product'
import Products from "../components/Products/AllProducts";


class ProductsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    updateSearch = (e) => {
        this.setState({search: e.target.value})
}
    render() {
        let filteredProducts = this.props.products.filter(product => {
            return product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
            <div>
                <div className='search'>
                    <input type="text"
                       value={this.state.search}
                       onChange={this.updateSearch}
                    placeholder='Search product'/>
                </div>
                <Products title="Products">
                    {filteredProducts.length ?
                        filteredProducts.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            onAddToCartClicked={() => this.props.addToCart(product.id)}
                            onLoadItemClicked={() => this.props.loadCurrentItem(product)}
                        />
                    )
                        : <div className='nothingFound'><b>Nothing was found for your request</b></div>}
                </Products>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    products: state.filteredProducts
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
