import {ValidationModel} from "../../models/ValidationModel";
import UserService from "../../Services/UserService";

const userService = new UserService()
export default async function isCreateChatValid(username: string, chatName: string): Promise<ValidationModel> {
    if (await userService.getUserFromMemory().then(res => {return res;}) === username) {
        return {isValid: false, message: "you can't make a chat with yourself"}
    }

    if (chatName.length < 3) {
        return {isValid: false, message: "chat name must be 3 characters long"}
    }

    if (username.length < 3) {
        return {isValid: false, message: "Your username must be 3 characters long"}
    }

    return {isValid: true, message: ""}
}
