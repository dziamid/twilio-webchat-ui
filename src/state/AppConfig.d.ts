/// <reference types="loglevel" />
import { DeepPartial, FormAttributes, CoreThemeColors } from "@twilio/frame-ui";
import * as actions from "../actions/appconfig";
import { Theme } from "../components/theme";
export declare type PredefinedThemeName = "MediumTheme" | "DarkTheme" | "BlueMediumTheme" | "BlueDarkTheme";
export interface ThemeConfigProps {
    baseName?: PredefinedThemeName;
    colors?: Partial<CoreThemeColors>;
    light?: boolean;
    overrides?: DeepPartial<Theme>;
}
export interface Config {
    accountSid?: string;
    flexFlowSid?: string;
    chatFriendlyName?: string;
    available?: boolean;
    logLevel?: log.LogLevelDesc;
    tokenServerUrl?: string;
    cancelEngagementUrl?: string;
    configurationUrl?: string;
    flexWebChannelsUrl?: string;
    updateEngagementUrl?: string;
    context?: any;
    identity?: string;
    colorTheme?: ThemeConfigProps | PredefinedThemeName;
    canvasBottom?: string;
    language?: string;
    disableLocalStorage?: boolean;
    preEngagementConfig?: FormAttributes;
    postEngagementConfig?: FormAttributes;
    timeoutEngagementConfig?: FormAttributes;
    startEngagementOnInit?: boolean;
    componentProps?: any;
}
export interface HeaderConfig {
    default?: string;
    image: {
        visible?: boolean;
        url?: string;
    };
    title: {
        visible?: boolean;
    };
    closeCallback?: () => void;
}
export declare function reduce(state: Config, action: actions.AppConfigAction): Config;
export declare function current(): Config;
export declare function tryGet(propCallBack: () => Object): Object;
export declare class Actions {
    static initConfig(config: Config): void;
    static getConfigFromContextApi(configurationUrl?: string, context?: any): Promise<any>;
    private static fetchConfig;
}
