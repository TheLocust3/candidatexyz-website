import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setInvertedNavbar, setFloatingNavbar } from '../../actions/global-actions';

import SignInForm from '../../components/users/SignInForm';

class SignInContainer extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
    }

    render() {
        return (
            <div className='content sign-in-form'>
                <Text type='headline4'>Sign In</Text>
                <br />

                <SignInForm redirectUrl='/admin' />
                <br />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(SignInContainer);
