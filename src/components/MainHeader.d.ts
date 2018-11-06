import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps, Theme, StyledOtherComponent } from "./theme";
export interface HeaderProps {
    titleText?: string;
    imageUrl?: string;
    showTitle?: boolean;
    showImage?: boolean;
    closeCallback?: Function;
}
export declare class MainHeader extends React.PureComponent<HeaderProps & ThemeProps, undefined> {
    static readonly displayName: string;
    static readonly Content: DynamicContentStore;
    static readonly defaultProps: {
        titleText: string;
        imageUrl: any;
        showImage: boolean;
        showTitle: boolean;
        closeCallback: () => void;
    };
    static updateAll(): void;
    render(): JSX.Element;
}
export declare const Container: StyledOtherComponent<{}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Theme>;
