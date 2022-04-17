import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
import modalStyling from "../Styling/modalStyling";
type ModalProps = {
    isVisible: boolean;
    children: React.ReactNode;
    [x: string]: any;
};
export const Modal = ({
                          isVisible = false,
                          children,
                          ...props
                      }: ModalProps) => {
    return (
        <RNModal
            isVisible={isVisible}
    animationInTiming={1000}
    animationOutTiming={1000}
    backdropTransitionInTiming={800}
    backdropTransitionOutTiming={800}
    {...props}>
    {children}
    </RNModal>
);
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
    <View style={modalStyling.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
    <View style={modalStyling.header}>
    <Text style={modalStyling.text}>{title}</Text>
        </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
    <View style={modalStyling.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
    <View style={modalStyling.footer}>{children}</View>
);


Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
