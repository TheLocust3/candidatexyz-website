export const SET_INVERTED_NAVBAR = 'SET_INVERTED_NAVBAR';
export const SET_FLOATING_NAVBAR = 'SET_FLOATING_NAVBAR';
export const SET_FULLSCREEN = 'SET_FULLSCREEN';

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

export function setFullscreen(fullscreen) {
    return {
        type: SET_FULLSCREEN,
        data: fullscreen
    }
}
