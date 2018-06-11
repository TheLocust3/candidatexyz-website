import React from 'react';

import SignUpForm from '../forms/SignUpForm';

class SignUpPanel extends React.Component {

    render() {
        return (
            <div className='content' id='sign-up'>
                <div className='mdc-typography--display2'>Join Us</div>

                <div className='splitscreen1'>
                    Sign up to show your interest in candidateXYZ. We'll contact you asking you to help us test our software on your campaign. We'll provide a slick website and manage your campaign's technical work. You'll focus on running for office.
                </div>

                <div className='splitscreen2'>
                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default SignUpPanel;