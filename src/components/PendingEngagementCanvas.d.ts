import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "./theme";
export interface Props {
    readonly taskSid?: string;
    readonly timeoutSeconds?: number;
    readonly cancelEngagementUrl?: string;
}
export interface WaitingState {
    waitTimer: any;
}
export declare class PendingEngagementCanvas extends React.PureComponent<Partial<Props> & ThemeProps, WaitingState> {
    private static readonly friendlyName;
    static readonly displayName: string;
    static readonly Content: DynamicContentStore;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleCancelButtonClick(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
