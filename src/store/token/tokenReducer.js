// application
import { CHANGE_TOKEN } from './tokenActionTypes';

export const TOKEN_NAMESPACE = 'token';

const initialState = {
    access_token:''
}

export default function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TOKEN:
            return {...state,access_token:action.access_token};
        default:
            return state;
    }
}
