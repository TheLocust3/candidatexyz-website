import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from 'candidatexyz-common-js/lib/elements';

import AuthApi from '../../../api/auth-api';

export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { email: null, password: null, rememberMe: false, error: '' };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheckbox(event) {
        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        AuthApi.signIn(this.state.email, this.state.password, this.state.rememberMe).then( response => {
            window.location.href = this.props.redirectUrl;
        }).catch( response => {
            this.setState({
                error: response.responseJSON.error
            });
        });
    }

    renderError() {
        if (_.isEmpty(this.state.error)) return;

        return (
            <div>
                {this.state.error}
            </div>
        )
    }

    renderInputs() {
        return (
            <div>
                <TextField type='email' name='email' label='Email' onChange={this.handleChange.bind(this)} style={{ width: '100%' }} />

                <TextField type='password' name='password' label='Password' onChange={this.handleChange.bind(this)} style={{ width: '100%' }} />
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderInputs()}<br />

                <Button>
                    <Text type='headline6'>Sign In</Text>
                </Button>
                
                {this.renderError()}
            </form>
        );
    }
}

SignInForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};
