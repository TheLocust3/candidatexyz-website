import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { setInvertedNavbar, setFloatingNavbar } from '../../actions/global-actions';
import { fetchSignUp } from '../../actions/sign-up-actions';
import MDCAutoInit from '../../components/common/MDCAutoInit';

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
