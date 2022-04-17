import {StyleSheet} from "react-native";

const modalStyling = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 24,
    },
    body: {
        justifyContent: "center",
        paddingHorizontal: 15,
        minHeight: 100,
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
    },
});

export default modalStyling
