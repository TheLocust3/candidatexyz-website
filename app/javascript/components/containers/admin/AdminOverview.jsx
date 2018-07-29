import React from 'react';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

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
                <div className='mdc-typography--headline4'>Admin Overview</div>
                <a href='#' className='mdc-typography--body1' onClick={this.onSignOut}>Sign out</a><br /><br />

                <div className='mdc-typography--headline6'>Sign Up List</div>
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
