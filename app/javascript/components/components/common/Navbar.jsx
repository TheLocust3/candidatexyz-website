import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { history } from '../../../constants';

class Navbar extends React.Component {

    onClickSignUp() {
        history.push('/home');

        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
    }

    render() {
        if (this.props.fullscreen) return null;
        
        let invertedNavbar = this.props.invertedNavbar ? 'navbar-inverted' : '';
        let floatingNavbar = this.props.floatingNavbar ? '' : 'navbar-relative';

        return (
            <div className={`navbar ${invertedNavbar} ${floatingNavbar}`}>
                <Link className='mdc-typography--headline6 navbar-link' to='/home'>Home</Link>

                <button className='mdc-typography--headline6 mdc-button mdc-button--raised navbar-button' onClick={this.onClickSignUp.bind(this)}>
                    Sign up
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        invertedNavbar: state.global.invertedNavbar,
        floatingNavbar: state.global.floatingNavbar,
        fullscreen: state.global.fullscreen
    };
}

export default connect(mapStateToProps)(Navbar);