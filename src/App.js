import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProductsContainer from "./containers/ProductsContainer";
import MoreAboutProductContainer from "./containers/MoreAboutProductContainer";
import CartContainer from "./containers/CartContainer";
import NavContainer from "./containers/NavContainer";

const App = (props) => {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavContainer />
                    <Switch>
                        <Route exact path="/" component={ProductsContainer} />
                        <Route exact path="/cart" component={CartContainer} />
                        {!props.current ? (
                            <Route path="/" />
                        ) : (
                            <Route path="/product/:id" component={MoreAboutProductContainer} />
                        )}
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }


export default App;
