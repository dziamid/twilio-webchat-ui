import { Store } from "redux";
import { AppState } from "./state/AppState";
import * as TwilioChat from "twilio-chat";
export declare type CFStateCallback = (storeState: any) => AppState;
export declare class CFModule {
    private static _store;
    private static _stateCallback;
    static init(store: Store<any>, stateCb?: CFStateCallback): void;
    static readonly state: AppState;
    static dispatch(action: any): any;
    private static _chatClient;
    static chatClient: TwilioChat.Client;
}
