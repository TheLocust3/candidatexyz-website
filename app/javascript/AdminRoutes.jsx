import _ from 'lodash';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCurrentUser } from './components/actions/user-actions';

import AdminOverview from './components/containers/admin/AdminOverview';
import ViewSignUp from './components/containers/admin/ViewSignUp';

class AdminRoutes extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        if (_.isEmpty(this.props.user)) return null;

        return (
            <div>
                <Route exact path='/admin' component={AdminOverview} />
                <Route exact path='/admin/sign-ups/:id' component={ViewSignUp} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(AdminRoutes);
