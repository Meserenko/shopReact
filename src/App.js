import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProductsContainer from "./containers/ProductsContainer";
import MoreAboutProductContainer from "./containers/MoreAboutProductContainer";
import CartContainer from "./containers/CartContainer";
import NavContainer from "./containers/NavContainer";
import Footer from "./components/Footer/Footer";
import CheckoutForm from "./components/Form/Form";

const App = (props) => {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavContainer />
                    <Switch>
                        <Route path='/form' component={CheckoutForm} />
                        <Route exact path="/" component={ProductsContainer} />
                        <Route exact path="/cart" component={CartContainer} />
                        {!props.current ? (
                            <Route path="/" />
                        ) : (
                            <Route path="/product/:id" component={MoreAboutProductContainer} />
                        )}
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>

        );
    }


export default App;
