import {StyleSheet} from "react-native";

const formStyling = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    inputView: {
        backgroundColor: "#EEF5F3",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 50,
    },

    BtnTxtColor: {
        color: "white"
    },

    Btn: {
        width: "70%",
        borderRadius: 30,
        height: 45,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        backgroundColor: "#28B397",
    },

    Title: {
        fontSize: 30,
        marginBottom: 30,
    }
});

export default formStyling;
