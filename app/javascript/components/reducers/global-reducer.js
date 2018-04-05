import * as GlobalActions from '../actions/global-actions';

const initialState = {
    invertedNavbar: false,
    floatingNavbar: true
};

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GlobalActions.SET_INVERTED_NAVBAR:
            return Object.assign({}, state, {
                invertedNavbar: action.data
            });
        case GlobalActions.SET_FLOATING_NAVBAR:
            return Object.assign({}, state, {
                floatingNavbar: action.data
            });
        default:
            return state;
    }
}
