import _ from 'lodash';
import React from 'react';

import SignUpForm from '../forms/SignUpForm';

class SignUpPanel extends React.Component {

    render() {
        return (
            <div className='content' id='sign-up'>
                <div className='mdc-typography--display2'>Join Us</div>

                <div className='splitscreen1'>
                    Sign up to help us test our software on your campaign. We'll provide the website and manage your campaign's technical work. You'll do the running.
                </div>

                <div className='splitscreen2'>
                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default SignUpPanel;