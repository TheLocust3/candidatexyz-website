import SignUpApi from '../../api/sign-up-api';

export const REQUEST_ALL_SIGN_UPS = 'REQUEST_ALL_SIGN_UPS';
export const RECEIVE_ALL_SIGN_UPS = 'RECEIVE_ALL_SIGN_UPS';
export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP';
export const RECEIVE_SIGN_UP = 'RECEIVE_SIGN_UP';

export function requestAllSignUps() {
    return {
        type: REQUEST_ALL_SIGN_UPS
    }
}

export function receiveAllSignUps(data) {
    return {
        type: RECEIVE_ALL_SIGN_UPS,
        data: data
    }
}

export function requestSignUp() {
    return {
        type: REQUEST_SIGN_UP
    }
}

export function receiveSignUp(data) {
    return {
        type: RECEIVE_SIGN_UP,
        data: data
    }
}

export function fetchAllSignUps(id) {

    return function (dispatch) {
        dispatch(requestAllSignUps());

        SignUpApi.getAll().then( data => {
            dispatch(receiveAllSignUps(data));
        });
    }
}

export function fetchSignUp(id) {

    return function (dispatch) {
        dispatch(requestSignUp());

        SignUpApi.get(id).then( data => {
            dispatch(receiveSignUp(data));
        });
    }
}
