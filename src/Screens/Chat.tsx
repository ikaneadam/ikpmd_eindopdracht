import React, {useEffect, useRef, useState} from "react";

import {IStackScreenProps} from "../Library/StackScreenProps";
import {ChatModel} from "../models/ChatModel";
import chatStyling from "../Styling/chatStyling";
import {useIsFocused} from "@react-navigation/native";
import ChatService from "../Services/ChatService";
import {MessageModel} from "../models/MessageModel";
import UserService from "../Services/UserService";
import {UserModel} from "../models/UserModel";
import formStyling from "../Styling/formStyling";
import messageValidation from "../util/validation/messageValidation";
import {FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import messageStyling from "../Styling/messageStyling";
import getLocalTime from "../util/localTime";

const Chat: React.FunctionComponent<IStackScreenProps> = props => {
    let {navigation, route, name} = props
    const chatService = new ChatService()
    const userService = new UserService()


    const [chat, setChat] = useState<ChatModel>(route.params.chat);
    const [userName, setUserName] = useState("");
    const [messages, setMessages] = useState<MessageModel[]>(route.params.chat.Messages);
    const [users, setUsers] = useState<UserModel[]>(route.params.chat.users);
    const [message, setMessage] = useState("");
    const flatListRef = useRef<FlatList>(null);
    setUser()
    setChatName()
    listenToChats()

    const isFocused = useIsFocused()

    useEffect(() => {
        setUser()
        listenToChats()
    }, [isFocused])

    async function setUser() {
        setUserName(await userService.getUserFromMemory().then(res => {
            if(res === null){
                return ""
            }
            return res;
        }))
    }

    function listenToChats() {
        chatService.socket.on(`receiveMessage-${chat.UUID}`, (receivedMessage: MessageModel) => {
            setMessages([...messages, receivedMessage])
        });
    }

    function sendMessage() {
        if (!messageValidation(message).isValid) {
            return
        }
        chatService.emitSendMessage("", chat.UUID, message)

        setMessage("")
    }

    //refactor to local variable
     function isSentByLoggedInUser(username: string) {
        return username === userName
    }

    function getMessageStyle(username: string) {
        if (isSentByLoggedInUser(username)) {
            return messageStyling.sentMessage
        }
        return messageStyling.receivedMessage
    }

    function setChatName() {
        route.name = chat.chatName
    }

    const Item = ({item}: { item: MessageModel }) => (
        <View style={[chatStyling.chat, getMessageStyle(item.userName)]}>
            <Text style={messageStyling.content}>{item.content}</Text>
            <Text style={messageStyling.date}>{getLocalTime(item.TimeStamp)}</Text>
        </View>
    );

    const renderItem = ({item}: { item: MessageModel }) => (
        <Item item={item}/>
    );


    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                ref={flatListRef}
                onContentSizeChange={() => flatListRef.current?.scrollToEnd({animated: false})}
                onLayout={() => flatListRef.current?.scrollToEnd({animated: false})}
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.UUID}
            />
            <View style={[chatStyling.chatFooter, {padding: 10}]}>
                <View style={formStyling.messageView}>
                    <TextInput
                        style={formStyling.MessageInput}
                        placeholderTextColor="#919191"
                        value={message}
                        onChangeText={(message) => setMessage(message)}
                    />
                </View>
                <TouchableOpacity onPress={sendMessage}>
                    <Image style={chatStyling.SendButton}
                           source={require('../../assets/sendButton.png')}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Chat;
