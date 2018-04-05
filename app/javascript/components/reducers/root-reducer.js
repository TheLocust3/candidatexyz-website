import { combineReducers } from 'redux';

import { userReducer } from './user-reducer'
import { signUpReducer } from './sign-up-reducer'
import { globalReducer } from './global-reducer'

const reducer = combineReducers({
    users: userReducer,
    signUp: signUpReducer,
    global: globalReducer
});

export default reducer;
