import {StyleSheet} from "react-native";

const modalStyling = StyleSheet.create({
    receivedMessage:{
        alignSelf: 'flex-start',
        borderRadius: 50,
        padding: 10
    },
    sentMessage: {
        backgroundColor: '#D9FDD3',
        alignSelf: 'flex-end',
        borderRadius: 50,
        padding: 10
    },
    date: {
        alignSelf: "flex-end",
        paddingLeft: 10,
        color: "#667781"
    },
    content: {
        fontSize: 15
    }

});

export default modalStyling
