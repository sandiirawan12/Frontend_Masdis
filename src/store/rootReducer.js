import { combineReducers } from "redux";
import authReducer, { AUTH_NAMESPACE } from "./auth/authReducer";
import redirectUrlReducer, { REDIRECT_URL_NAMESPACE } from "./redirectUrl/redirectUrlReducer";
import tokenReducer, { TOKEN_NAMESPACE } from "./token/tokenReducer";
import userReducer, { USER_NAMESPACE } from "./user/userReducer";


export default combineReducers({
    [AUTH_NAMESPACE]: authReducer,
    [TOKEN_NAMESPACE]: tokenReducer,
    [USER_NAMESPACE]: userReducer,
    [REDIRECT_URL_NAMESPACE]: redirectUrlReducer
});
