import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setInvertedNavbar, setFloatingNavbar } from '../actions/global-actions';
import MDCAutoInit from '../components/common/MDCAutoInit';

class Privacy extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
    }

    render() {
        return (
            <div className='content'>
                <h1 className='mdc-typography--display3'>Privacy Policy</h1>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Privacy);