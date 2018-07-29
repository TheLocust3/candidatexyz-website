import React from 'react';
import { connect } from 'react-redux';
import { Parallax, Background } from 'react-parallax';
import { MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { setInvertedNavbar, setFloatingNavbar } from '../actions/global-actions';

import WebsitePanel from '../components/panels/WebsitePanel';
import SignUpPanel from '../components/panels/SignUpPanel';

class Index extends React.Component {

    componentWillMount() {
        this.props.dispatch(setInvertedNavbar(false));
        this.props.dispatch(setFloatingNavbar(true));
    }

    render() {
        return (
            <div>
                <Parallax strength={300} style={{ height: '100vh' }} bgStyle={{ width: '100%' }}>
                    <Background>
                        <img src='/splash.jpeg' style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                    </Background>

                    <div className='header-text'>
                        <div className='mdc-typography--headline1'>candidateXYZ</div>
                        <div className='mdc-typography--headline4 header-text-subtitle'>Democratizing democracy.</div>
                    </div>
                </Parallax>

                <WebsitePanel />

                <SignUpPanel />

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Index);
