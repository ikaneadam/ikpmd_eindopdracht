import {StyleSheet} from "react-native";

const chatStyling = StyleSheet.create({
    chat:{
        padding: 5,
        backgroundColor: "white",
        flexDirection: 'row',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
    },
    chatTitle:{
        paddingLeft: 5
    },
    chatMessage:{
        paddingLeft: 5,
        color:'#c7c7c7'
    },
    chatPicture:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor:"#ebebeb"
    },
    footer:{
        backgroundColor: "white",
        alignItems: "center",
        alignSelf: 'stretch'
    },
    chatFooter:{
        flexDirection: "row",
        backgroundColor: "white",
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addGroupButton:{
        width: 50,
        height: 50,
    },
    SendButton:{
        alignSelf: "flex-end",
        width: 40,
        height: 40,
    }

});

export default chatStyling;
