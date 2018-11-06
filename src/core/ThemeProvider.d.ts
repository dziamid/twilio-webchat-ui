import * as React from "react";
import { ThemeConfigProps } from "../state/AppConfig";
export interface ThemeProviderProps {
    themeConf?: ThemeConfigProps;
}
export declare class ThemeProvider extends React.PureComponent<ThemeProviderProps, undefined> {
    render(): JSX.Element;
    private static getMergedTheme;
}
