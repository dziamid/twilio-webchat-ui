import { Store } from "redux";
import { FlexState } from "../Store";
import * as AppConfig from "../state/AppConfig";
import { Strings } from "../localization";
import * as TwilioChat from "twilio-chat";
import defaultConfiguration from "../core/FlexWebChat.conf";
export { defaultConfiguration };
export declare class Manager {
    private _store?;
    private _strings;
    private _initialized;
    constructor(config: AppConfig.Config, store: Store<FlexState>);
    private static validateConfig;
    static create(userConfiguration: AppConfig.Config, store?: Store<FlexState>): Promise<Manager>;
    configuration: AppConfig.Config;
    readonly store: Store<FlexState>;
    strings: Strings;
    readonly chatClient: TwilioChat.Client;
    loadInitialData(): Promise<any>;
    private configureReduxStore;
    private setStringsFromConfig;
    private initSession;
}
