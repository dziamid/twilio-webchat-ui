import * as React from "react";
import { Manager } from "./Manager";
export interface ContextType {
    manager: Manager;
}
export interface ContextProviderProps extends ContextType {
}
export declare const AppContext: React.Context<ContextProviderProps>;
export declare class ContextProvider extends React.PureComponent<ContextProviderProps> {
    componentWillMount(): void;
    render(): JSX.Element;
}
