import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

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
                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='email' name='email' className='mdc-text-field__input' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-floating-label'>Email</label>
                    <div className='mdc-line-ripple' />
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <input type='password' name='password' className='mdc-text-field__input' onChange={this.handleChange.bind(this)} />
                    <label className='mdc-floating-label'>Password</label>
                    <div className='mdc-line-ripple' />
                </div>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.renderInputs()}<br />

                <button className='mdc-typography--headline6 mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple'>Sign In</button>
                {this.renderError()}
            </form>
        );
    }
}

SignInForm.propTypes = {
    redirectUrl: PropTypes.string.isRequired
};
