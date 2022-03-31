import {User} from "./User";
import {Message} from "./Message";


export type Chat = {
  UUID?: string
  chatName: string
  users?: User[]
  Messages: Message[]
}

