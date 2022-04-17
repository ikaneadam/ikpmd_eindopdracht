import io from "socket.io-client";
import UserService from "./UserService";
import {ChatModel} from "../models/ChatModel";
import {CreateChatRequest} from "../models/requests/CreateChatRequest";


export default class ChatService{
    public socket = io("http://10.0.2.2:5000");
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    public async emitGetChats() {
        this.socket.emit("getChats", await this.userService.getUserFromMemory().then(res => {
            return res
        }))
    }

    public emitCreateChat(createChat: CreateChatRequest){
        this.socket.emit("createChat", createChat.user_requester, createChat.user_receiver, createChat.chatName)
    }

    public async emitSendMessage(userReceiver: string, chatUUID: string, message: string) {
        this.socket.emit("sendMessage", await this.userService.getUserFromMemory().then(res => {
            return res
        }), userReceiver, chatUUID, message)
    }
}
