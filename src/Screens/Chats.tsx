import React, {useEffect, useState} from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import {ChatModel} from "../models/ChatModel";
import chatStyling from "../Styling/chatStyling";
import ChatService from "../Services/ChatService";
import UserService from "../Services/UserService";
import {useIsFocused} from "@react-navigation/native";
import {HeaderBackButton} from "react-navigation-stack";

const Chats: React.FunctionComponent<IStackScreenProps> = props =>{
    const chatService = new ChatService()
    const userService = new UserService()
    const {navigation, route, name} = props
    const [chats, setChats] = useState<ChatModel[]>([]);
    const isFocused = useIsFocused()

    useEffect(() => {
        listenToChats()
        emitGetChats()
        listenToCreatedChats()
    } , [isFocused])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton onPress={() => {
                    userService.logOut()
                    navigation.navigate("Login")}
                }  />
            ),
        });
    }, [navigation]);

    async function listenToChats() {
        chatService.socket.on(`receiveChats-${await userService.getUserFromMemory().then(res=>{return res})}`, (receivedChats: ChatModel[]) => {
            setChats(receivedChats)
        });
    }

    async function listenToCreatedChats() {
        chatService.socket.on(`receiveChat-${await userService.getUserFromMemory().then(res=>{return res})}`, (receivedChat: ChatModel) => {
            emitGetChats()
        });
    }

    function emitGetChats(){
        chatService.emitGetChats()
    }

    function navigateToCreateChat(){
        navigation.navigate("CreateChat")
    }
    function navigateToChat(chat: ChatModel){
        navigation.navigate("Chat", {chat: chat})
    }

    function getLastMessage(chat: ChatModel): string{
        const messages = chat.Messages
        if(messages === undefined){
            return ""
        }

        if(messages.length === 0){
            return ""
        }
        return messages[messages.length-1].content
    }

    const Item = ({ item }: { item: ChatModel }) => (
        <TouchableWithoutFeedback onPress={() => navigateToChat(item)}>
            <View style={chatStyling.chat}>
                <Image style={chatStyling.chatPicture}
                       source={require('../../assets/chatPicture.jpg')}
                />
                <View>
                    <Text style={chatStyling.chatTitle}>{item.chatName}</Text>
                    <Text style={chatStyling.chatMessage}>{getLastMessage(item)}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    const renderItem = ({ item }: { item: ChatModel }) => (
        <Item item={item}/>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={chats}
                    renderItem={renderItem}
                    keyExtractor={item => item.UUID}
                />

            <View style={chatStyling.footer}>
                <TouchableHighlight onPress={navigateToCreateChat}>
                    <Image style={chatStyling.addGroupButton}

                       source={require('../../assets/add-icon.jpg')}
                    />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

export default Chats;
