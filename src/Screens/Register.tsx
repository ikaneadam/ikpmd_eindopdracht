import React, {Component, useEffect, useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import formStyling from "../Styling/formStyling";
import {StatusBar} from "expo-status-bar";
import UserService from "../Services/UserService";
import isAccountValid from "../util/accountValidation";
import {User} from "../models/User";
import {useIsFocused} from "@react-navigation/native";

const Register: React.FunctionComponent<IStackScreenProps> = props =>{
    const userService: UserService = new UserService()
    const {navigation, route, name} = props
    const [username, setUsername] = useState("");
    const errorText = "Username already exist"
    const [registerError, setRegisterError] = useState("");

    const isFocused = useIsFocused()

    useEffect(() => {
        setRegisterError("")
        setUsername("")
    } , [isFocused])

    function navigateTLoginPage(){
        navigation.navigate("Login")
    }

    function register(){
        if(!isAccountValid(username).isValid){
            setRegisterError(isAccountValid(username).message)
            return
        }

        const user: User = {"username": username}
        userService.registerRequest(user).then(()=>{
            navigateTLoginPage()
        },).catch(()=>{
            setRegisterError(errorText)
        })
    }

    return (
        <View style={formStyling.container}>
            <StatusBar style="auto" />
            <Text style={formStyling.Title}>Register an account</Text>
            <View style={formStyling.inputView}>
                <TextInput
                    style={formStyling.TextInput}
                    placeholder="Naam..."
                    placeholderTextColor="#919191"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <TouchableOpacity style={formStyling.Btn}>
                <Text onPress={register} style={formStyling.BtnTxtColor}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={formStyling.error}>{registerError}</Text>
            <TouchableOpacity>
                <Text onPress={navigateTLoginPage} style={formStyling.link}>sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;
