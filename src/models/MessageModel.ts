import {ChatModel} from "./ChatModel";

export type MessageModel = {
  UUID: string
  content: string
  userName: string
  userNameReceiver: string
  isReceived: boolean
  TimeStamp: string
  chat?: ChatModel;
}
