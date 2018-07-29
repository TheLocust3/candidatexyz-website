import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'candidatexyz-common-js/lib/elements';

class ShowSignUp extends React.Component {

    render() {
        return (
            <div className='mdc-typography--body1 content'>
                <Text type='headline6'>Name</Text>
                <Text type='body1'>{this.props.signUp.name}</Text>
                <br /><br />

                <Text type='headline6'>Email</Text>
                <Text type='body1'>{this.props.signUp.email}</Text>
                <br /><br />

                <Text type='headline6'>Zipcode</Text>
                <Text type='body1'>{this.props.signUp.zipcode}</Text>
                <br /><br />

                <Text type='headline6'>Reason</Text>
                <Text type='body1'>{this.props.signUp.reason}</Text>
            </div>
        );
    }
}

ShowSignUp.propTypes = {
    signUp: PropTypes.object
};

export default ShowSignUp;
