import {ValidationModel} from "../../models/ValidationModel";

export default function messageValidation(message: string): ValidationModel{
    if(message == ""){
        return {isValid: false, message: "Your chat cant be empty"}
    }
    return {isValid: true, message: ""}
}
