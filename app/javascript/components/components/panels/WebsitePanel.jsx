import React from 'react';

class WebsitePanel extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='website-panel'>
                    <div className='splitscreen1'>
                        <div className='mdc-typography--display2'>Everyone should be able to run for office</div><br />
                        <div className='mdc-typography--headline'>We'll handle the campaign.</div>
                        <div className='mdc-typography--headline'>You'll focus on the important things.</div><br />
                        <div className='mdc-typography--subtitle1 website-blurb'>Run for office, create a website, organize volunteers, and more. All at the click of a button</div>
                    </div>

                    <div className='splitscreen2'>
                        <img className='website-image' src='/website.jpeg' />
                    </div>
                </div>
                
                <div className='website-tri-screen'>
                    <div className='tri-screen'>
                        <i className='fas fa-paperclip website-icon' />
                        <div className='mdc-typography--headline'>Skip the Paperwork</div>

                        <div className='mdc-typography--body1'>
                            We'll file the paperwork required to run for office and help you through convoluted campaign finance law.
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <i className='fas fa-desktop website-icon' />
                        <div className='mdc-typography--headline'>Build Campaign Website</div>

                        <div className='mdc-typography--body1'>
                            Create a beautiful website and allow your staff to update it with ease. All in a few minutes
                        </div>
                    </div>

                    <div className='tri-screen'>
                        <i className='far fa-address-book website-icon' />
                        <div className='mdc-typography--headline'>Mobilize Volunteers</div>

                        <div className='mdc-typography--body1'>
                            Mobilize your volunteers with fliers, posters, and yard signs.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebsitePanel;