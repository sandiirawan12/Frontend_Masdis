// application
import { CHANGE_REDIRECT_URL } from './redirectUrlActionTypes';

export const REDIRECT_URL_NAMESPACE = 'redirectUrl';

const initialState = '';

export default function redirectUrlReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_REDIRECT_URL:
            return state = action.payload;
        default:
            return state;
    }
}