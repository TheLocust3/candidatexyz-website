import _ from 'lodash';
import React from 'react';
import { Text, TextField, TextArea, Button } from 'candidatexyz-common-js/lib/elements';

import SignUpApi from '../../../api/sign-up-api';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: '', reason: '', zipcode: '', name: '' };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        SignUpApi.create(this.state.email, this.state.reason, this.state.zipcode, this.state.name).then(() => {
            location.reload();
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField className='email-text-field' type='email' name='email' label='Email' onChange={this.handleChange.bind(this)} required />

                <TextField className='name-text-field' name='name' label='Name' onChange={this.handleChange.bind(this)} required />

                <TextField className='zipcode-text-field' name='zipcode' label='Zipcode' onChange={this.handleChange.bind(this)} required />

                <TextArea name='reason' label='Who are you?' onChange={this.handleChange.bind(this)} rows={5} style={{ width: '100%' }} required />

                <Button style={{ float: 'right' }}>
                    <Text type='headline6'>Submit</Text>
                </Button>
            </form>
        );
    }
}

export default SignUpForm;