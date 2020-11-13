import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { connect } from "react-redux";
import ProductsContainer from "./containers/ProductsContainer";
import MoreAboutProductContainer from "./containers/MoreAboutProductContainer";
import CartContainer from "./containers/CartContainer";
import NavContainer from "./containers/NavContainer";
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavContainer />
                    <Switch>
                        <Route exact path="/" component={ProductsContainer} />
                        <Route exact path="/cart" component={CartContainer} />
                        {!this.props.current ? (
                            <Route path="/" />
                        ) : (
                            <Route path="/product/:id" component={MoreAboutProductContainer} />
                        )}
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        current: state.currentItem,
    };
};

export default connect(mapStateToProps)(App);
