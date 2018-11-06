import { OptionalThemeProps } from "emotion-theming";
import { Theme as ControlsTheme, CSSProps, CoreThemeColors } from "@twilio/frame-ui";
export * from "create-emotion-styled";
export interface Theme extends ControlsTheme {
    name?: string;
    colors: CoreThemeColors;
    MainContainer: CSSProps;
    EntryPoint: {
        Container: CSSProps;
    };
    MainHeader: {
        Container: CSSProps;
        Logo: CSSProps;
    };
    PreEngagementCanvas: {
        Container: CSSProps;
        Form: {
            SubmitButton: CSSProps;
        };
    };
    PostEngagementCanvas: {
        Container: CSSProps;
        DynamicForm: {
            SubmitButton: CSSProps;
            ThumbsUpOrDown: CSSProps;
            ThumbsUpOrDownSelected: CSSProps;
            TextArea: CSSProps;
            Placeholder: CSSProps;
        };
    };
    PendingEngagementCanvas: {
        Container: CSSProps;
        CancelButton: CSSProps;
    };
    TimeoutEngagementCanvas: {
        Container: CSSProps;
    };
    Modal: {
        Container: CSSProps;
        Title: CSSProps;
        PrimaryButton: CSSProps;
        SecondaryButton: CSSProps;
    };
}
declare const _default: import("create-emotion-styled/types/react").CreateStyled<Theme>;
export default _default;
export declare type PropsWithTheme<P> = OptionalThemeProps<P, Theme>;
export declare type ThemeProps = {
    theme?: Theme;
};
export declare const withTheme: <P, C>(Component: C) => C;
