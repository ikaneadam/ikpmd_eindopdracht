import React, {Component, useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {IStackScreenProps} from "../Library/StackScreenProps";
import formStyling from "../Styling/formStyling";
import {StatusBar} from "expo-status-bar";

const Register: React.FunctionComponent<IStackScreenProps> = props =>{
    const {navigation, route, name} = props
    const [email, setEmail] = useState("");

    function navigateTLoginPage(){
        navigation.navigate("Login")
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
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <TouchableOpacity style={formStyling.Btn}>
                <Text style={formStyling.BtnTxtColor}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={navigateTLoginPage} style={formStyling.forgot_button}>sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;
