import {StackNavigationProp} from "@react-navigation/stack";
import {ParamListBase, RouteProp} from "@react-navigation/native";

export interface IStackScreenProps {
    name: string;
    navigation: StackNavigationProp<any>;
    route: RouteProp<ParamListBase, any>
}
