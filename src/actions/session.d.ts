import { Action } from "redux";
import * as constants from "../constants/session";
import { EngagementStage } from "../constants/session";
import { TokenPayload } from "src/TokenHelper";
export interface SetIdentity extends Action {
    readonly type: constants.ACTION_SET_IDENTITY;
    readonly identity: string;
}
export declare function setIdentity(identity: string): SetIdentity;
export interface SetChannelSid extends Action {
    readonly type: constants.ACTION_SET_CHANNEL_SID;
    readonly channelSid: string;
}
export declare function setChannelSid(channelSid: string): SetChannelSid;
export interface SetAccessToken extends Action {
    readonly type: constants.ACTION_SET_ACCESS_TOKEN;
    readonly accessToken: TokenPayload;
}
export declare function setAccessToken(accessToken: TokenPayload): SetAccessToken;
export interface ToggleEntryPoint extends Action {
    readonly type: constants.ACTION_TOGGLE_ENTRY_POINT;
}
export declare function toggleEntryPoint(): ToggleEntryPoint;
export interface SetEntryPointExpanded extends Action {
    readonly type: constants.ACTION_SET_ENTRY_POINT_EXPANDED;
    readonly isEntryPointExpanded: boolean;
}
export declare function setEntryPointExpanded(isEntryPointExpanded: boolean): SetEntryPointExpanded;
export interface SetEngagementStage extends Action {
    readonly type: constants.ACTION_SET_ENGAGEMENT_STAGE;
    readonly engagementStage: constants.EngagementStage;
}
export declare function setEngagementStage(engagementStage: EngagementStage): SetEngagementStage;
export interface SetTaskSid extends Action {
    readonly type: constants.ACTION_SET_TASK_SID;
    readonly taskSid: string;
}
export declare function setTaskSid(taskSid: string): SetTaskSid;
export interface InitSession extends Action {
    readonly type: constants.ACTION_INIT_SESSION;
    readonly identity: string;
}
export declare function initSession(identity: string): InitSession;
export interface SetDisableLocalStorage extends Action {
    readonly type: constants.ACTION_SET_DISABLE_LOCAL_STORAGE;
}
export declare function setDisableLocalStorage(): SetDisableLocalStorage;
export interface SetPreEngagementReady extends Action {
    readonly type: constants.ACTION_SET_PRE_ENGAGEMENT_READY;
    readonly preEngagementReady: boolean;
}
export declare function setPreEngagementReady(preEngagementReady: boolean): SetPreEngagementReady;
export interface SetAvatar extends Action {
    readonly type: constants.ACTION_SET_AVATAR;
    readonly identity: string;
    readonly avatar: string;
}
export declare function setAvatar(identity: string, avatar: string): SetAvatar;
export interface SetWaitSetTimeOut extends Action {
    readonly type: constants.ACTION_SET_WAIT_SET_TIMEOUT;
    readonly waitingTimeout: any;
}
export declare function setWaitSetTimeOut(waitingTimeout: any): SetWaitSetTimeOut;
export declare type SessionStateAction = SetIdentity | ToggleEntryPoint | SetChannelSid | SetAccessToken | SetEntryPointExpanded | SetEngagementStage | SetTaskSid | SetDisableLocalStorage | SetPreEngagementReady | SetAvatar | SetWaitSetTimeOut;
