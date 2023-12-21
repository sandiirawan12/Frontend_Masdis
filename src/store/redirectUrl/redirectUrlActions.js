import { CHANGE_REDIRECT_URL } from "./redirectUrlActionTypes";

export function changeRedirectUrl(payload) {
    return {
        type: CHANGE_REDIRECT_URL,
        payload
    }
}