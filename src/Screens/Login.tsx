import React, {useEffect, useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import { StatusBar } from "expo-status-bar";
import formStyling from "../Styling/formStyling";
import UserService from "../Services/UserService"
import {UserModel} from "../models/UserModel";
import isAccountValid from "../util/validation/accountValidation";
import { useIsFocused } from '@react-navigation/native'

const Login: React.FunctionComponent<IStackScreenProps> = props =>{
    const userService: UserService = new UserService()
    const {navigation, route, name} = props
    const [username, setUsername] = useState("");
    const errorText = "Username doesn't exist"
    const [loginError, setLoginError] = useState("");
    const isFocused = useIsFocused()

    useEffect(() => {
        setLoginError("")
        setUsername("")
    } , [isFocused])

    function navigateToRegisterPage(){
        navigation.navigate("Register")
    }

    function navigateToChatsPage(){
        navigation.navigate("Chats")
    }

    function login(){
        if(!isAccountValid(username).isValid){
            setLoginError(isAccountValid(username).message)
            return
        }

        const user: UserModel = {"username": username}
        userService.loginRequest(user).then( () => {
            userService.saveUserInMemory(user.username)
            navigateToChatsPage()
        },).catch(()=>{
            setLoginError(errorText)
        })
    }

    function logUserIn(){
         userService.getUserFromMemory().then(res=>{
             if(res != null){
                 navigateToChatsPage()
             }
         })
    }

    logUserIn()
    return (
        <View style={formStyling.container}>

            <StatusBar style="auto" />
            <Text style={formStyling.Title}>Login to your Account</Text>
            <View style={formStyling.inputView}>
                <TextInput
                    style={formStyling.TextInput}
                    placeholderTextColor="#919191"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <TouchableOpacity onPress={login} style={formStyling.Btn}>
                <Text style={formStyling.BtnTxtColor}>Sign in</Text>
            </TouchableOpacity>
            <Text style={formStyling.error}>{loginError}</Text>
            <TouchableOpacity>
                <Text onPress={navigateToRegisterPage} style={formStyling.link}>sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Login;
