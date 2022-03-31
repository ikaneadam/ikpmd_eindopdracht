import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Component, useEffect} from "react";
import { createAppContainer } from 'react-navigation';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Login from "./src/Screens/Login";
import { createStackNavigator } from '@react-navigation/stack';
import {IStackScreenProps} from "./src/Library/StackScreenProps";
import { NavigationContainer } from '@react-navigation/native';
import routes from "./src/config/routes";
const Stack = createStackNavigator();

const App: React.FunctionComponent<IStackScreenProps> = props =>{
    const {navigation, route, name} = props

    useEffect(() =>{
        console.log({navigation, route, name});
    })


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}>
                {
                    routes.map((r, i) =>(
                        <Stack.Screen key={i} name={r.name} options={{headerShown: r.headerShown}}>
                            {(props) => <r.component name={r.name} {...props}  />}
                        </Stack.Screen>
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;





