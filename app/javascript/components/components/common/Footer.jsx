import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div>
                    <a href='http://facebook.com'><i className='fab fa-facebook-f footer-icon' style={{ fontSize: `2.5em` }} /></a>
                    <a href='http://twitter.com'><i className='fab fa-twitter footer-icon' style={{ fontSize: `2.5em` }} /></a>
                </div>

                <Link className='footer-link' to='/about'>About</Link>
                <Link className='footer-link' to='/privacy'>Privacy</Link>

                <div className='footer-disclaimer'>
                    © 2018 - candidateXYZ, Inc. All rights reserved
                </div>
            </div>
        );
    }
}

export default Footer;
