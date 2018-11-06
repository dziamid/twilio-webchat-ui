import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "./theme";
export interface EntryPointProps {
    tagline?: string;
    icon?: string;
    entryPointStyle?: any;
    entryPointBorderStyle?: string;
    entryPointClassName?: string;
    widgetClassName?: string;
    entryPointSize?: string;
    entryPointLocation?: string;
    bottom?: string;
    right?: string;
    background?: string;
    color?: string;
}
export declare class EntryPoint extends React.PureComponent<EntryPointProps & ThemeProps, undefined> {
    static readonly displayName: string;
    static readonly Content: DynamicContentStore;
    static readonly defaultProps: {
        tagline: string;
        icon: string;
        bottom: string;
        right: string;
        color: string;
        background: string;
        entryPointStyle: any;
        entryPointBorderStyle: any;
        entryPointClassName: any;
        widgetClassName: any;
        entryPointSize: any;
        entryPointLocation: any;
    };
    static updateAll(): void;
    render(): JSX.Element;
}
