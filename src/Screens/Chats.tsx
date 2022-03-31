import React, {Component} from "react";
import {Text, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import {Chat} from "../models/Chat";
import {User} from "../models/User";
import {Message} from "../models/Message";

const Chats: React.FunctionComponent<IStackScreenProps> = props =>{
    const {navigation, route, name} = props
    // const message: Chat = {chatName: "CHATNAME", Messages: }
    // const test: Chat = {chatName: "CHATNAME", Messages: }


    return (
        <Text>yooo</Text>
    );
}

export default Chats;
