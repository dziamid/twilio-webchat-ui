import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "./theme";
export interface MainContainerProps {
    height?: string;
    width?: string;
    bottom?: string;
    right?: string;
}
export declare class MainContainer extends React.PureComponent<MainContainerProps & ThemeProps, undefined> {
    static readonly displayName: string;
    static readonly Content: DynamicContentStore;
    static readonly defaultProps: {
        height: string;
        width: string;
        bottom: string;
        right: string;
    };
    static updateAll(): void;
    render(): JSX.Element;
}
