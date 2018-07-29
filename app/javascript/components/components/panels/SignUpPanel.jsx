import React from 'react';
import { Text } from 'candidatexyz-common-js/lib/elements';

import SignUpForm from '../forms/SignUpForm';

class SignUpPanel extends React.Component {

    render() {
        return (
            <div className='content' id='sign-up'>
                <div className='mdc-typography--headline3'>Join Us</div>

                <div className='splitscreen1'>
                    <Text type='body1'>
                        Sign up to show your interest in candidateXYZ. We'll contact you asking you to help us test our software on your campaign. We'll provide a slick website and manage your campaign's technical work. You'll focus on running for office.
                    </Text>
                </div>

                <div className='splitscreen2'>
                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default SignUpPanel;