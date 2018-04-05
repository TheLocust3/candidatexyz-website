import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { setInvertedNavbar, setFloatingNavbar } from '../../actions/global-actions';
import { fetchAllSignUps } from '../../actions/sign-up-actions';
import MDCAutoInit from '../../components/common/MDCAutoInit';

import SignUpsList from '../../components/admin/SignUpsList';

class AdminOverview extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
        this.props.dispatch(fetchAllSignUps());
    }

    render() {
        return (
            <div className='content'>
                <div className='mdc-typography--display3'>Admin Overview</div><br />

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
