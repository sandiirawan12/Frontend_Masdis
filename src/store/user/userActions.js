import { CHANGE_USER } from "./userActionTypes"

export const changeUser = (user) => {
    return {
        type: CHANGE_USER,
        payload: user
    }
}