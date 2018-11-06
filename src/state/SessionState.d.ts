import { Dispatch } from "redux";
import * as TwilioChat from "twilio-chat";
import * as actions from "../actions/session";
import * as constants from "../constants/session";
import { TokenPayload } from "../TokenHelper";
export interface SessionState {
    readonly identity: string;
    readonly isEntryPointExpanded: boolean;
    readonly sessionData: any;
    readonly channelSid: string;
    readonly taskSid: string;
    readonly engagementStage: string;
    readonly ignorePersisted: boolean;
    readonly preEngagementReady: boolean;
    readonly avatars: Map<string, string>;
    readonly waitingTimeoutSeconds: number;
    readonly tokenPayload: TokenPayload;
}
export declare function reduce(state: SessionState, action: actions.SessionStateAction): SessionState;
export declare class Actions {
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    /**
     * Toggles entry point expansion
     * by loading/unloading the chat from module
     * @returns {ToggleEntryPoint}
     */
    static toggleEntryPoint(): actions.ToggleEntryPoint;
    /**
     * Sets the task sid
     * @param {string} taskSid
     * @returns {SetTaskSid}
     */
    static setTaskSid(taskSid: string): actions.SetTaskSid;
    /**
     * Sets the engagement state to pre | in | post
     * @param {EngagementStage} engagementStage
     * @returns {SetEngagementStage}
     */
    static setEngagementStage(engagementStage: constants.EngagementStage): actions.SetEngagementStage;
    /**
     * Sets isEntryPointExpanded
     * @returns {SetEntryPointExpanded}
     */
    static setEntryPointExpanded(isEntryPointExpanded: boolean): actions.SetEntryPointExpanded;
    /**
     * Updates the identity of the customer in the state
     * @param {string} identity
     * @returns {SetIdentity}
     */
    static setIdentity(identity: string): actions.SetIdentity;
    static setChannelSid(channelSid: string): actions.SetChannelSid;
    /**
     * Updates the accessToken in the state
     * @param {string} accessToken
     * @returns {SetAccessToken}
     */
    static setAccessToken(accessToken: TokenPayload): actions.SetAccessToken;
    static setDisableLocalStorage(): actions.SetDisableLocalStorage;
    static setPreEngagementReady(preEngagementReady: boolean): actions.SetPreEngagementReady;
    static setAvatar(identity: string, avatar: string): actions.SetAvatar;
    static setWaitSetTimeOut(waitingTimeoutFunction: any): actions.SetWaitSetTimeOut;
    static initClients(friendlyName?: string): Promise<void>;
    static shutdown(): void;
    static entryPointClick(): Promise<any>;
    static getChatClient(token: any): Promise<TwilioChat.Client>;
    static getAgentAvatar(identity: any): string;
    static initSession(): Promise<void>;
    static defaultStartup(): Promise<void>;
    /**
     * Calls the startEngagement url
     *  We expect that any form post info has already been added to config.context
     *  The startEngagement call can return tokens and channelSids and roomSids
     * @returns any
     */
    static startEngagement(formData: any, startingEngagementStage?: any, formName?: any): Promise<any>;
    static updateEngagement(data: any, propertyName: any): Promise<any>;
    /**
     * Cancel task and go back to pre-engagement screen
     * Fire and forget. User does not care if cancellation was successful
     */
    static cancelTask(): void;
    static closeClick(): void;
}
