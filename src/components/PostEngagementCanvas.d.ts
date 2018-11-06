import * as React from "react";
import { ThemeProps } from "./theme";
export interface Props {
    postEngagementConfig?: any;
}
export declare class PostEngagementCanvas extends React.PureComponent<Partial<Props> & ThemeProps, undefined> {
    submitPostEngagement: (formData: any, formName: any) => void;
    render(): JSX.Element;
}
