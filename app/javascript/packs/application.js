import "babel-polyfill";

import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk/es';

import reducer from '../components/reducers/root-reducer';
import { history } from '../constants';

import AdminRoutes from '../AdminRoutes';

import Navbar from '../components/components/common/Navbar';
import Footer from '../components/components/common/Footer';

import SignInContainer from '../components/containers/users/SignInContainer';
import Index from '../components/containers/Index';
import About from '../components/containers/About';
import Privacy from '../components/containers/Privacy';

import Unsubscribe from '../components/containers/Unsubscribe';

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    dataType: 'json'
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class Base extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Navbar />

                        <Route component={ScrollToTop} />

                        <Switch>
                            <Route exact path='/' component={Index} />
                            <Route exact path='/home' component={Index} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/privacy' component={Privacy} />

                            <Route exact path='/unsubscribe/:token' component={Unsubscribe} />

                            <Route exact path='/sign-in' component={SignInContainer} />

                            <AdminRoutes />
                        </Switch>

                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);
