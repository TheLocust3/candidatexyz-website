import _ from 'lodash';
import React from 'react';

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
                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '50%', marginRight: '2.5%' }}>
                    <input type='email' name='email' className='mdc-text-field__input' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-floating-label'>Email</label>
                    <div className='mdc-line-ripple' />
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '30%', marginRight: '2.5%' }}>
                    <input type='text' name='name' className='mdc-text-field__input' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-floating-label'>Name</label>
                    <div className='mdc-line-ripple' />
                </div>

                <div className='mdc-text-field' data-mdc-auto-init='MDCTextField' style={{ width: '15%' }}>
                    <input type='text' name='zipcode' className='mdc-text-field__input' onChange={this.handleChange.bind(this)} required />
                    <label className='mdc-floating-label'>Zipcode</label>
                    <div className='mdc-line-ripple' />
                </div>

                <div className='mdc-text-field mdc-text-field--textarea' data-mdc-auto-init='MDCTextField' style={{ width: '100%' }}>
                    <textarea type='text' name='reason' className='mdc-text-field__input' onChange={this.handleChange.bind(this)} rows={5} required />
                    <label className='mdc-floating-label'>Who are you?</label>
                    <div className='mdc-line-ripple' />
                </div>

                <button className='mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple' style={{ float: 'right' }}>Submit</button>
            </form>
        );
    }
}

export default SignUpForm;