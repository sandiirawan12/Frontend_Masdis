import { CHANGE_USER } from "./userActionTypes";

export const USER_NAMESPACE = 'user';

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_USER:
            return state = action.payload
        default:
            return state
    }
}