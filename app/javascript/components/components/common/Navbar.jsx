import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { history } from '../../../constants';

class Navbar extends React.Component {

    onClickSignUp() {
        history.push('/home');

        $('html, body').animate({
            scrollTop: $(window).height() * 2 // TODO: find better way to do this
        }, 1000);
    }

    render() {
        let invertedNavbar = this.props.invertedNavbar ? 'navbar-inverted' : '';
        let floatingNavbar = this.props.floatingNavbar ? '' : 'navbar-relative';

        return (
            <div className={`navbar ${invertedNavbar} ${floatingNavbar}`}>
                <Link className='navbar-link' to='/home'>Home</Link>

                <button className='mdc-button mdc-button--raised navbar-button' onClick={this.onClickSignUp.bind(this)}>
                    Sign up
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        invertedNavbar: state.global.invertedNavbar,
        floatingNavbar: state.global.floatingNavbar
    };
}

export default connect(mapStateToProps)(Navbar);