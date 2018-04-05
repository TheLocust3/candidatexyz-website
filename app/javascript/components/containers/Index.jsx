import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Parallax, Background } from 'react-parallax';

class Index extends React.Component {

    render() {
        return (
            <div>
                <Parallax strength={300} style={{ height: '100vh' }} bgStyle={{ width: '100%' }}>
                    <Background>
                        <img src='https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fd2v9y0dukr6mq2.cloudfront.net%2Fvideo%2Fthumbnail%2FRfeyEzE%2Frandom-lines-purple-geometric-shapes-background_ryp-ysybl_thumbnail-full01.png&f=1' style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                    </Background>

                    <h1 className='mdc-typography--display4 header-text'>candidateXYZ</h1>
                </Parallax>
            </div>
        );
    }
}

export default connect()(Index);
