import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div>
                    <a href='https://www.instagram.com/'><i className='fab fa-instagram footer-icon' style={{ fontSize: `2.5em` }} /></a>
                    <a href='https://twitter.com/jakekinsella_'><i className='fab fa-twitter footer-icon' style={{ fontSize: `2.5em` }} /></a>
                </div>

                <Link className='mdc-typography--body1 footer-link' to='/about'>About</Link>
                <Link className='mdc-typography--body1 footer-link' to='/privacy'>Privacy</Link>

                <div className='mdc-typography--body2 footer-disclaimer'>
                    © 2018 - candidateXYZ, LLC. All rights reserved
                </div>
            </div>
        );
    }
}

export default Footer;
