import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../components/reducers/root-reducer';
import { history } from '../constants';

import Navbar from '../components/components/common/Navbar';

import Index from '../components/containers/Index';

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
                <div>
                    <Router history={history}>
                        <div>
                            <Navbar />

                            <Route component={ScrollToTop} />

                            <Switch>
                                <Route exact path='/' component={Index} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);
