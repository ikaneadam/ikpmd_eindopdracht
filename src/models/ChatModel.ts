import {UserModel} from "./UserModel";
import {MessageModel} from "./MessageModel";


export type ChatModel = {
  UUID: string
  chatName: string
  users: UserModel[]
  Messages: MessageModel[]
}

