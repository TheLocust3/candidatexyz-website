import _ from 'lodash';
import React from 'react';

import SignUpForm from '../forms/SignUpForm';

class SignUpPanel extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='mdc-typography--display1'><b>Join Us</b></div>

                <div className='splitscreen1'>
                    Sign up to help us test our software on your campaign!
                </div>

                <div className='splitscreen2'>
                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default SignUpPanel;