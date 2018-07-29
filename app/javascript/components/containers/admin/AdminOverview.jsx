import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../../constants';
import { setInvertedNavbar, setFloatingNavbar } from '../../actions/global-actions';
import { fetchAllSignUps } from '../../actions/sign-up-actions';
import AuthApi from '../../../api/auth-api';

import SignUpsList from '../../components/admin/SignUpsList';

class AdminOverview extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
        this.props.dispatch(fetchAllSignUps());
    }

    onSignOut() {
        AuthApi.signOut().then(() => {
            history.push('/');
        });
    }

    render() {
        return (
            <div className='content'>
                <Text type='headline4'>Admin Overview</Text>
                <a href='#' onClick={this.onSignOut}>
                    <Text type='body1'>Sign out</Text>
                </a>
                <br /><br />

                <Text type='headline6'>Sign Up List</Text>
                <SignUpsList signUps={this.props.signUps} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        signUps: state.signUps.signUps
    };
}

export default connect(mapStateToProps)(AdminOverview);
