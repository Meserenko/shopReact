import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import AllProducts from "./components/Products/AllProducts";
import MoreAboutProduct from "./components/MoreAboutProduct/MoreAboutProduct";
import { connect } from "react-redux";
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={AllProducts} />
                        {!this.props.current ? (
                            <Route path="/" />
                        ) : (
                            <Route path="/product/:id" component={MoreAboutProduct} />
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
