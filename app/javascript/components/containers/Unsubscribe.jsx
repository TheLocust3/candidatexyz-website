import React from 'react';
import { connect } from 'react-redux';
import { UnsubscribeApi } from 'candidatexyz-common-js';
import { Text, Button, MDCAutoInit } from 'candidatexyz-common-js/lib/elements';

import { history } from '../../constants';
import { setFullscreen } from '../actions/global-actions';

class Unsubscribe extends React.Component {

    componentWillMount() {
        this.props.dispatch(setFullscreen(true));
    }

    componentWillUnmount() {
        this.props.dispatch(setFullscreen(false));
    }

    onClick(event) {
        event.preventDefault();

        UnsubscribeApi.unsubscribe(this.props.match.params.token).then(() => {
            history.push('/');
        });
    }

    render() {
        return (
            <div className='content-15'>
                <div className='mdc-typography--headline3'>Unsubscribe</div><br /><br />

                <Button onClick={this.onClick.bind(this)}>
                    <Text type='headline6'>Unsubscribe</Text>
                </Button>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Unsubscribe);
