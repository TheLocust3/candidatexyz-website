import React from 'react';
import { connect } from 'react-redux';
import { UnsubscribeApi } from 'candidatexyz-common-js';

import { history } from '../../constants';
import { setFullscreen } from '../actions/global-actions';

import MDCAutoInit from '../components/common/MDCAutoInit';

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

                <button className='mdc-typography--headline6 mdc-button mdc-button--raised' data-mdc-auto-init='MDCRipple' onClick={this.onClick.bind(this)}>
                    Unsubscribe
                </button>

                <MDCAutoInit />
            </div>
        );
    }
}

export default connect()(Unsubscribe);
