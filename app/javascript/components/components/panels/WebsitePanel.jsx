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
                        <div className='mdc-typography--subtitle1 website-blurb'>Create a beautiful website, manage your email list and organize your volunteers, and more. All at the click of a button.</div>
                    </div>

                    <div className='splitscreen2'>
                        <img className='website-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608482/screenshot-website.png?1506608482' />
                    </div>
                </div>
                
                <div className='website-tri-screen'>
                    <div className='tri-screen'>
                        <img className='website-tri-screen-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608484/rfo-icon.png?1506608484' />
                        <div className='mdc-typography--headline'><b>Create a Beautiful Website</b></div>

                        <div>
                            Easily create a website and allow your staff to update it with ease.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <img className='website-tri-screen-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608484/rfo-icon.png?1506608484' />
                        <div className='mdc-typography--headline'><b>Manage your Email Lists</b></div>

                        <div>
                            Voters can sign up on your website and you can easily send emails to all of them.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <img className='website-tri-screen-image' src='https://d3n8a8pro7vhmx.cloudfront.net/3dna/pages/43095/attachments/original/1506608484/rfo-icon.png?1506608484' />
                        <div className='mdc-typography--headline'><b>Organize your Volunteers</b></div>

                        <div>
                            Mobilize volunteers who have signed up on your website.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebsitePanel;