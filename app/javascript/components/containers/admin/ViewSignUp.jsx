import React from 'react';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setInvertedNavbar, setFloatingNavbar } from '../../actions/global-actions';
import { fetchSignUp } from '../../actions/sign-up-actions';

import ShowSignUp from '../../components/admin/ShowSignUp';

class ViewSignUp extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
        this.props.dispatch(fetchSignUp(this.props.match.params.id));
    }

    render() {
        return (
            <div className='content'>
                <div className='mdc-typography--headline4'>Show Sign Up</div>

                <ShowSignUp signUp={this.props.signUp} />

                <MDCAutoInit />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        signUp: state.signUps.signUp
    };
}

export default connect(mapStateToProps)(ViewSignUp);
