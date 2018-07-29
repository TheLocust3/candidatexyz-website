import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'candidatexyz-common-js/lib/elements';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div>
                    <a href='https://www.instagram.com/'><i className='fab fa-instagram footer-icon' style={{ fontSize: `2.5em` }} /></a>
                    <a href='https://twitter.com/jakekinsella_'><i className='fab fa-twitter footer-icon' style={{ fontSize: `2.5em` }} /></a>
                </div>

                <Link className='footer-link' to='/about'>
                    <Text type='body1'>About</Text>
                </Link>

                <Link className='footer-link' to='/privacy'>
                    <Text type='body1'>Privacy</Text>
                </Link>

                <div className='footer-disclaimer'>
                    <Text type='body2'>© 2018 - candidateXYZ, LLC. All rights reserved</Text>
                </div>
            </div>
        );
    }
}

export default Footer;
