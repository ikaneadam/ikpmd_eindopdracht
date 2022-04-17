import {StyleSheet} from "react-native";

const modalStyling = StyleSheet.create({
    receivedMessage:{
        marginBottom: 2,
        marginLeft: 2,
        alignSelf: 'flex-start',
        maxWidth: '90%',
        minWidth: '16%',
        borderRadius: 30,
        padding: 15
    },
    sentMessage: {
        marginRight: 2,
        marginBottom: 2,
        backgroundColor: '#D9FDD3',
        alignSelf: 'flex-end',
        maxWidth: '90%',
        minWidth: '16%',
        borderRadius: 30,
        padding: 15
    },
    date: {
        position: 'absolute',
        alignSelf: "flex-end",
        paddingLeft: 15,
        color: "#667781"
    },
    content: {
        paddingBottom: 5,
        fontSize: 15
    }

});

export default modalStyling
