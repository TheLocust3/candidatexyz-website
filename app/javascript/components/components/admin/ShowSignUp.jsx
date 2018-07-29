import React from 'react';

import PropTypes from 'prop-types';

class ShowSignUp extends React.Component {

    render() {
        return (
            <div className='mdc-typography--body1 content'>
                <div className='mdc-typography--headline6'>Name</div>
                {this.props.signUp.name}<br /><br /><br />

                <div className='mdc-typography--headline6'>Email</div>
                {this.props.signUp.email}<br /><br /><br />

                <div className='mdc-typography--headline6'>Zipcode</div>
                {this.props.signUp.zipcode}<br /><br /><br />

                <div className='mdc-typography--headline6'>Reason</div>
                {this.props.signUp.reason}
            </div>
        );
    }
}

ShowSignUp.propTypes = {
    signUp: PropTypes.object
};

export default ShowSignUp;
