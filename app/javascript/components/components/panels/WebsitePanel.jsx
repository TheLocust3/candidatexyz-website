import React from 'react';
import { Text } from 'candidatexyz-common-js/lib/elements';

class WebsitePanel extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='website-panel'>
                    <div className='splitscreen1'>
                        <Text type='headline3'>Everyone should be able to run for office</Text><br />
                        <Text type='headline5'>We'll handle the campaign.</Text>
                        <Text type='headline5'>You'll focus on the important things.</Text><br />
                        <div className='website-blurb'>
                            <Text type='body1'>Run for office, create a website, organize volunteers, and more. All at the click of a button</Text>
                        </div>
                    </div>

                    <div className='splitscreen2'>
                        <img className='website-image' src='/website.jpeg' />
                    </div>
                </div>
                
                <div className='website-tri-screen'>
                    <div className='tri-screen'>
                        <i className='fas fa-paperclip website-icon' />
                        <Text type='headline5'>Skip the Paperwork</Text>

                        <Text type='body2'>
                            We'll file the paperwork required to run for office and help you through convoluted campaign finance law.
                        </Text>
                    </div>

                    <div className='tri-screen'>
                        <i className='fas fa-desktop website-icon' />
                        <Text type='headline5'>Build Campaign Website</Text>

                        <Text type='body2'>
                            Create a beautiful website and allow your staff to update it with ease. All in a few minutes
                        </Text>
                    </div>

                    <div className='tri-screen'>
                        <i className='far fa-address-book website-icon' />
                        <Text type='headline5'>Organize Volunteers</Text>

                        <Text type='body2'>
                            Mobilize your volunteers with fliers, posters, and yard signs.
                        </Text>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebsitePanel;