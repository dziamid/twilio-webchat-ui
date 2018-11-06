import { CoreThemeColors } from "@twilio/frame-ui";
export interface ThemeDef {
    colors: CoreThemeColors;
    lightTheme: boolean;
}
export declare class ThemeDefCreator {
    static getPredefinedTheme(name: string): ThemeDef;
}
