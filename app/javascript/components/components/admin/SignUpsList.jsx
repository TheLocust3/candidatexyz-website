import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

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
                                    {signUp.name}

                                    <span className='mdc-typography--body2 mdc-list-item__secondary-text'>
                                        {signUp.email}
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
