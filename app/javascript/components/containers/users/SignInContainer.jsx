import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { setInvertedNavbar, setFloatingNavbar } from '../../actions/global-actions';
import MDCAutoInit from '../../components/common/MDCAutoInit';

import SignInForm from '../../components/users/SignInForm';

class SignInContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
    }

    render() {
        return (
            <div className='content sign-in-form'>
                <div className='mdc-typography--headline4'>Sign In</div><br />

                <SignInForm redirectUrl='/admin' /><br />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SignInContainer);
