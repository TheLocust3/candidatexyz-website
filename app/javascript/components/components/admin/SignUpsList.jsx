import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Text } from 'candidatexyz-common-js/lib/elements';

class SignUpsList extends React.Component {

    renderSignUpsList() {
        if (_.isEmpty(this.props.signUps)) return;

        return (
            <ul className='mdc-list mdc-list--two-line'>
                {this.props.signUps.map((signUp) => {
                    return (
                        <Link className='unstyled-link' key={signUp.id} to={`/admin/sign-ups/${signUp.id}`}>
                            <li className='mdc-list-item'>
                                <span className='mdc-typography--body1 mdc-list-item__text'>
                                    <Text type='body1'>{signUp.name}</Text>

                                    <span className='mdc-typography--body2 mdc-list-item__secondary-text'>
                                        <Text type='body2'>{signUp.email}</Text>
                                    </span>
                                </span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderSignUpsList()}
            </div>
        );
    }
}

SignUpsList.propTypes = {
    signUps: PropTypes.array
};

export default SignUpsList;
