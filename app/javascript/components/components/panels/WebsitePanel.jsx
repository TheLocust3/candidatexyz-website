import _ from 'lodash';
import React from 'react';

class WebsitePanel extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='website-panel'>
                    <div className='splitscreen1'>
                        <div className='mdc-typography--display2'>Running for office should be easy</div><br />
                        <div className='mdc-typography--headline'>Focus on the important things.</div>
                        <div className='mdc-typography--headline'>We'll handle the campaign.</div><br />
                        <div className='mdc-typography--subtitle1 website-blurb'>Create a beautiful website, manage your email lists, organize your volunteers, and more. All at the click of a button.</div>
                    </div>

                    <div className='splitscreen2'>
                        <img className='website-image' src='/website.jpeg' />
                    </div>
                </div>
                
                <div className='website-tri-screen'>
                    <div className='tri-screen'>
                        <i class='fas fa-desktop website-icon' />
                        <div className='mdc-typography--headline'>Create a Campaign Website</div>

                        <div className='mdc-typography--body1'>
                            Create a beautiful website and allow your staff to update it with ease.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <i class='far fa-envelope website-icon' />
                        <div className='mdc-typography--headline'>Manage Email Lists</div>

                        <div className='mdc-typography--body1'>
                            Easily send styled emails to all your supporters.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <i class='far fa-address-book website-icon' />
                        <div className='mdc-typography--headline'>Organize Volunteers</div>

                        <div className='mdc-typography--body1'>
                            Mobilize your volunteers all with sign ups on your website.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebsitePanel;