import tokenApi from '@/api/token'
import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/auth/authActionTypes'
import { changeToken } from '../token/tokenActions'
import { changeUser } from '../user/userActions'
export function login() {
    return {
        type: AUTH_LOGIN,
    }
}
export function logout() {
    return dispatch => {
        tokenApi.tokenPublic().then(res => res.json()).then(res => {
            dispatch(changeToken(res.access_token))
            dispatch(changeUser({}))
            dispatch(logoutSuccess())
        })
    }
}

export function logoutSuccess() {
    return {
        type: AUTH_LOGOUT,
    }
}

