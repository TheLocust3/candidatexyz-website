import UserApi from '../../api/user-api';

export const SET_INVERTED_NAVBAR = 'SET_INVERTED_NAVBAR';
export const SET_FLOATING_NAVBAR = 'SET_FLOATING_NAVBAR';

export function setInvertedNavbar(inverted) {
    return {
        type: SET_INVERTED_NAVBAR,
        data: inverted
    }
}

export function setFloatingNavbar(floating) {
    return {
        type: SET_FLOATING_NAVBAR,
        data: floating
    }
}
