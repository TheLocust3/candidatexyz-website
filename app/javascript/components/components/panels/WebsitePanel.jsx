import _ from 'lodash';
import React from 'react';

class WebsitePanel extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='website-panel'>
                    <div className='splitscreen1'>
                        <div className='mdc-typography--display1'><b>Running for office should be easy</b></div><br />
                        <div className='mdc-typography--headline'>We'll handle the campaign.</div>
                        <div className='mdc-typography--headline'>You'll handle the running.</div><br />
                        <div className='mdc-typography--subtitle1 website-blurb'>Create a beautiful website, manage your email lists, organize your volunteers, and more. All at the click of a button.</div>
                    </div>

                    <div className='splitscreen2'>
                        <img className='website-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608482/screenshot-website.png?1506608482' />
                    </div>
                </div>
                
                <div className='website-tri-screen'>
                    <div className='tri-screen'>
                        <img className='website-tri-screen-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608484/rfo-icon.png?1506608484' />
                        <div className='mdc-typography--headline'><b>Create a Campaign Website</b></div>

                        <div>
                            Create a beautiful website and allow your staff to update it with ease.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <img className='website-tri-screen-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608484/rfo-icon.png?1506608484' />
                        <div className='mdc-typography--headline'><b>Manage Email Lists</b></div>

                        <div>
                            Easily send styled emails to all your supporters.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <img className='website-tri-screen-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608484/rfo-icon.png?1506608484' />
                        <div className='mdc-typography--headline'><b>Organize Volunteers</b></div>

                        <div>
                            Mobilize your volunteers all with sign ups on your website.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebsitePanel;