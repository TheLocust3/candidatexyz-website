import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import { setInvertedNavbar, setFloatingNavbar } from '../actions/global-actions';
import MDCAutoInit from '../components/common/MDCAutoInit';

class About extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(true));
        this.props.dispatch(setFloatingNavbar(false));
    }

    render() {
        return (
            <div className='content'>
                <h1 className='mdc-typography--display3'>About candidateXYZ</h1>

                <p>
                    We at candidateXYZ believe that everyone should be able to run for political office, regardless of their experience and money. We want to inspire the next generation to run for office, creating a diversity of ideas in our politics.
                </p>

                <h1 className='mdc-typography--display1'>Company</h1>

                <p>
                    candidateXYZ was founded by Jake Kinsella at the end of his senior year of high school. He founded the company when he noticed how few politicians actually had websites and how difficult it was to actually run for office. With this in mind, candidateXYZ was born. We work with poltiicians to create websites for their campaigns and to run their technological operations.
                </p>
                
                <h1 className='mdc-typography--display1'>Team</h1>

                <div className='team-profile'>
                    <img className='team-image' src='/jake.png' />

                    <div className='team-subtitle'>
                        <div className='mdc-typography--headline'><b>Jake Kinsella</b></div>
                        <div className='mdc-typography--subheading1'>CTO & Founder</div>
                    </div>
                </div>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(About);
