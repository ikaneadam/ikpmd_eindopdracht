import React, {useEffect, useState} from "react";
import {Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import formStyling from "../Styling/formStyling";
import {StatusBar} from "expo-status-bar";
import UserService from "../Services/UserService";
import {CreateChatRequest} from "../models/requests/CreateChatRequest";
import isCreateChatValid from "../util/validation/createChatValidation";
import ChatService from "../Services/ChatService";
import {useIsFocused} from "@react-navigation/native";
import {Modal} from "./Modal";

const CreateChat: React.FunctionComponent<IStackScreenProps> = props =>{
    const {navigation, route, name} = props
    const userService = new UserService()
    const chatService = new ChatService()

    const [userName, setUsername] = useState("");
    const [chatName, setChatName] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    const errorText = "Username doesn't exist"
    const notFoundStatusCode = 404
    const [createChatError, setCreateChatError] = useState("");
    const isFocused = useIsFocused()

    useEffect(() => {
        resetScreen()
    } , [isFocused])

    function resetScreen() {
        setUsername("")
        setChatName("")
        setCreateChatError("")
    }


    async function creatChat() {
        if (!(await isCreateChatValid(userName, chatName)).isValid) {
            setCreateChatError((await isCreateChatValid(userName, chatName)).message)
            return
        }

        const getUserRequest = await userService.getUserRequest(userName).catch((error)=>{
            return error.response.status
        })

        if (getUserRequest === notFoundStatusCode){
            return setCreateChatError(errorText)
        }

        const createChat: CreateChatRequest = {
            "user_requester": await userService.getUserFromMemory().then(res=>{
                if(res == null){
                    return ""
                }
                return res
            }),
            "user_receiver": userName,
            chatName: chatName
        }
        chatService.emitCreateChat(createChat)
        setModalVisible(true)
        resetScreen()
    }

    return (
        <View style={formStyling.container}>

            <StatusBar style="auto" />
            <Text style={formStyling.inputTitle}>Chat name</Text>
            <View style={formStyling.inputView}>
                <TextInput
                    style={formStyling.TextInput}
                    placeholder="chat naam..."
                    placeholderTextColor="#919191"
                    value={chatName}
                    onChangeText={(chatName) => setChatName(chatName)}
                />
            </View>

            <Text style={formStyling.inputTitle}>Username</Text>
            <View style={formStyling.inputView}>
                <TextInput
                    style={formStyling.TextInput}
                    placeholder="Naam..."
                    placeholderTextColor="#919191"
                    value={userName}
                    onChangeText={(userName) => setUsername(userName)}
                />
            </View>
            <Text style={formStyling.error}>{createChatError}</Text>
            <TouchableOpacity onPress={creatChat} style={formStyling.Btn}>
                <Text style={formStyling.BtnTxtColor}>Create chat</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <Modal.Header title="chat is created!" />
                    <Modal.Footer>
                        <Button title="ok" onPress={()=>{setModalVisible(false)}} />
                    </Modal.Footer>
                </Modal.Container>
            </Modal>
        </View>
    );
}

export default CreateChat;
