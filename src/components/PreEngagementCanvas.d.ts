import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "./theme";
export interface Props {
    preEngagementConfig?: any;
}
export declare class PreEngagementCanvas extends React.PureComponent<Partial<Props> & ThemeProps, undefined> {
    private static readonly friendlyName;
    static readonly displayName: string;
    static readonly Content: DynamicContentStore;
    componentDidMount(): void;
    startEngagement: (formData: any, formName: any) => void;
    render(): JSX.Element;
}
