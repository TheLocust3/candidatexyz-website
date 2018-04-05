import * as SignUpActions from '../actions/sign-up-actions';

import { combineReducers } from 'redux';

const initialState = {
    isReady: false,
    signUp: {},
    signUps: []
};

export function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case SignUpActions.RECEIVE_ALL_SIGN_UPS:
        case SignUpActions.REQUEST_SIGN_UP:
            return Object.assign({}, state, {
                isReady: false
            });
        case SignUpActions.RECEIVE_ALL_SIGN_UPS:
            return Object.assign({}, state, {
                isReady: true,
                signUps: action.data
            });
        case SignUpActions.RECEIVE_SIGN_UP:
            return Object.assign({}, state, {
                isReady: true,
                signUp: action.data
            });
        default:
            return state;
    }
}
