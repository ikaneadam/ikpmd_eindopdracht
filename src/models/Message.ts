import {Chat} from "./Chat";

export type Message = {
  UUID: string
  content: string
  userName: string
  userNameReceiver: string
  isReceived: boolean
  TimeStamp: string
  chat?: Chat;
}
