import {IRouteProps} from "../Library/RouteProp";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import CreateChat from "../Screens/CreateChat";
import Chat from "../Screens/Chat";
import Chats from "../Screens/Chats";

const routes: IRouteProps[] = [
    {
        name: "Login",
        component: Login,
        headerShown: false
    },
    {
        name: "Register",
        component: Register,
        headerShown: false
    },
    {
        name: "Chats",
        component: Chats,
        headerShown: true
    },
    {
        name: "Chat",
        component: Chat,
        headerShown: true
    },
    {
        name: "CreateChat",
        component: CreateChat,
        headerShown: true
    }
]

export default routes
