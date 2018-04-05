import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    onClickHome() {
        console.log('home');
    }

    onClickSignUp() {
        console.log('sign up');
    }

    render() {
        let invertedNavbar = this.props.invertedNavbar ? 'navbar-inverted' : '';
        let floatingNavbar = this.props.floatingNavbar ? '' : 'navbar-relative';

        return (
            <div className={`navbar ${invertedNavbar} ${floatingNavbar}`}>
                <Link className='navbar-link' to='/home' onClick={this.onClickHome.bind(this)}>Home</Link>

                <Link to='/home' onClick={this.onClickHome.bind(this)}>
                    <button className='mdc-button mdc-button--raised navbar-button' onClick={this.onClickSignUp.bind(this)}>
                        Sign up
                    </button>
                </Link>
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