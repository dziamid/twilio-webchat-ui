import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "./theme";
import { Config } from "../state/AppConfig";
import { SessionState } from "../state/SessionState";
export interface RootContainerProps {
    isEntryPointExpanded?: boolean;
    identity?: string;
    channelSid?: string;
    config?: Config;
    engagementStage?: string;
    canvasBottom?: string;
    session?: SessionState;
}
export declare class RootContainer extends React.PureComponent<Partial<RootContainerProps> & ThemeProps, undefined> {
    private static readonly friendlyName;
    static readonly displayName: string;
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
}
