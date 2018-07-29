import React from 'react';
import { Text } from 'candidatexyz-common-js/lib/elements';

import SignUpForm from '../forms/SignUpForm';

class SignUpPanel extends React.Component {

    render() {
        return (
            <div className='content' id='sign-up'>
                <Text type='headline3'>Join Us</Text>

                <div className='splitscreen1 relative'>
                    <Text className='splitscreen1 desktop-middle' type='body1'>
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