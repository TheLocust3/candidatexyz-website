import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

class ShowSignUp extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='mdc-typography--display1'>Name</div>
                {this.props.signUp.name}<br /><br /><br />

                <div className='mdc-typography--display1'>Email</div>
                {this.props.signUp.email}<br /><br /><br />

                <div className='mdc-typography--display1'>Zipcode</div>
                {this.props.signUp.zipcode}<br /><br /><br />

                <div className='mdc-typography--display1'>Reason</div>
                {this.props.signUp.reason}
            </div>
        );
    }
}

ShowSignUp.propTypes = {
    signUp: PropTypes.object
};

export default ShowSignUp;
