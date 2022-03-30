import React, {Props, useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import { StatusBar } from "expo-status-bar";
import formStyling from "../Styling/formStyling";
import UserService from "../Services/UserService"
import {User} from "../models/User";
import {Validation} from "../models/Validation";
const Login: React.FunctionComponent<IStackScreenProps> = props =>{
    const userService: UserService = new UserService()
    const {navigation, route, name} = props
    const [username, setUsername] = useState("");
    const errorText = "Username doesn't exist"
    let loginError = ""

    function navigateToRegisterPage(){
        navigation.navigate("Register")
    }

    function navigateToChatsPage(){
        navigation.navigate("Chats")
    }

    //can use library for this
    function isLoginValid(): Validation{
        if(username.length < 3){
            return {isValid: false, message: "Your username must be 3 characters long"}
        }
        return {isValid: true, message: ""}
    }

    function login(){
        console.log(loginError)
        if(!isLoginValid().isValid){
            loginError = isLoginValid().message
            return
        }

        const user: User = {"username": username}
        userService.loginRequest(user).then(()=>{
            navigateToChatsPage()
            console.log(loginError)
        },).catch(()=>{
            loginError = errorText
            console.log(loginError)
        })

        console.log(loginError)
    }


    return (
        <View style={formStyling.container}>

            <StatusBar style="auto" />
            <Text style={formStyling.Title}>Login to your Account</Text>
            <View style={formStyling.inputView}>
                <TextInput
                    style={formStyling.TextInput}
                    placeholder="Naam..."
                    placeholderTextColor="#919191"
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <TouchableOpacity onPress={login} style={formStyling.Btn}>
                <Text style={formStyling.BtnTxtColor}>Sign in</Text>
            </TouchableOpacity>
            <Text style={formStyling.forgot_button}>{loginError}</Text>
            <TouchableOpacity>
                <Text onPress={navigateToRegisterPage} style={formStyling.forgot_button}>sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Login;
