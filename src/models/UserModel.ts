import {ChatModel} from "./ChatModel";

export type UserModel = {
  UUID?: string
  username: string
  chats?: ChatModel[];
}

