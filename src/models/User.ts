import {Chat} from "./Chat";

export type User = {
  UUID?: string
  username: string
  chats?: Chat[];
}

