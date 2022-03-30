import {IStackScreenProps} from "./StackScreenProps";
import React from "react";

export interface IRouteProps {
    component: React.FunctionComponent<IStackScreenProps>;
    name: string;
    headerShown: boolean;
}
