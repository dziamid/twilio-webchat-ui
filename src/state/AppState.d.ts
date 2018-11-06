import { ChatState } from "@twilio/frame-ui";
import { Config } from "./AppConfig";
import { SessionState } from "./SessionState";
export interface AppState {
    readonly config: Config;
    readonly session: SessionState;
    readonly chat: ChatState.ChatState;
}
