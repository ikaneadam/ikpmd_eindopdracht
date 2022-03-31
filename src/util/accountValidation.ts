import {Validation} from "../models/Validation";

export default function isAccountValid(username: string): Validation{
    if(username.length < 3){
        return {isValid: false, message: "Your username must be 3 characters long"}
    }
    return {isValid: true, message: ""}
}
