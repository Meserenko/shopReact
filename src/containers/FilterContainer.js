import {connect} from "react-redux";
import { sortProducts } from "../actions/shoppingActions";
import Filter from "../components/Filtering/Filter";


const mapStateToProps = (state) => ({
    filteredProducts: state.filteredProducts,
    sort: state.sort,
    products: state.products
});

const mapDispatchToProps = (dispatch) => {
    return {
        sortProducts: (products, sort) => dispatch(sortProducts(products,sort)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps )(Filter);