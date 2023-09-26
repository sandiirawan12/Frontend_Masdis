// application
import { AUTH_LOGIN, AUTH_LOGOUT } from './authActionTypes';

export const AUTH_NAMESPACE = 'auth';

const initialState = false;

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return state = true;
        case AUTH_LOGOUT:
            return state = false;
        default:
            return state;
    }
}

// const authReducer = withClientState(authBaseReducer, AUTH_NAMESPACE);

// export default authReducer;
