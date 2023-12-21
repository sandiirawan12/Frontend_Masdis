import { CHANGE_TOKEN } from "./tokenActionTypes";

export function changeToken(access_token){
    return {type:CHANGE_TOKEN,access_token}
}