import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setInvertedNavbar, setFloatingNavbar } from '../actions/global-actions';

class About extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
    }

    render() {
        return (
            <div className='content'>
                <Text type='headline4'>About candidateXYZ</Text>
                <br />

                <Text type='body1'>
                    We at candidateXYZ believe that everyone should be able to run for political office, regardless of their experience or financial situation. We strive to create a diversity of ideas in our elected officials to combat the vicious partisanship plaguing our national politics.
                </Text>
                <br />

                <Text type='headline5'>Company</Text>
                <br />

                <Text type='body1'>
                    At the end of his senior year of high school, Jake Kinsella founded candidateXYZ. He founded the company when he noticed how few politicians actually had websites and how difficult it was to run for office. With this in mind, candidateXYZ was born. Currently, we work with poltiicians to create websites for their campaigns and run their technological operations. In the future, we plan to open our technology up to the world and make it easy for anybody to run for office.
                </Text>
                <br />
                
                <Text type='headline5'>Team</Text>
                <br />

                <a className='unstyled-link' href='https://www.linkedin.com/in/jake-kinsella/'>
                    <div className='team-profile'>
                        <img className='team-image' src='/jake.png' />

                        <div className='team-subtitle'>
                            <Text type='headline6'>Jake Kinsella</Text>
                            <Text type='body1'>CTO & Founder</Text>
                        </div>
                    </div>
                </a>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(About);
