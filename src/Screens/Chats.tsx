import React, {Component} from "react";
import {FlatList, Image, Text, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import {Chat} from "../models/Chat";
import {User} from "../models/User";
import {Message} from "../models/Message";
import chatStyling from "../Styling/chatStyling";

const Chats: React.FunctionComponent<IStackScreenProps> = props =>{
    const {navigation, route, name} = props

    const message: Message = {UUID: "", content: "yoo man", userName:"",userNameReceiver: "", isReceived: true,TimeStamp: ""}
    const test1: Chat = {UUID: "1", chatName: "yo", Messages: [message, message] }
    const test2: Chat = {UUID: "2", chatName: "test", Messages: [message, message] }
    const test3: Chat = {UUID: "3", chatName: "manr", Messages: [message, message] }
    const chats: Chat[] = [test1,test2,test3]

    function getLastMessage(chat: Chat): string{
        const messages = chat.Messages
        if(messages.length === 0){
            return ""
        }
        return messages[messages.length-1].content
    }

    const Item = ({ item }: { item: Chat }) => (
        <View style={chatStyling.chat}>
            <Image style={chatStyling.chatPicture}
                source={require('../../assets/chatPicture.jpg')}
            />
        <View>
            <Text style={chatStyling.chatTitle}>{item.chatName}</Text>
            <Text style={chatStyling.chatMessage}>{getLastMessage(item)}</Text>
        </View>
        </View>
    );

    const renderItem = ({ item }: { item: Chat }) => (
        <Item item={item}/>
    );

    return (
        <View>
            <FlatList
                data={chats}
                renderItem={renderItem}
                keyExtractor={item => item.UUID}
            />
        </View>
    );
}

export default Chats;
