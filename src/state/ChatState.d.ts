import * as TwilioChat from "twilio-chat";
import { Channel } from "twilio-chat/lib/channel";
export declare class Actions {
    static init(client: TwilioChat.Client): void;
    static initChatFrame(client: TwilioChat.Client): void;
    static shutdown(): void;
    static joinAndInitChannelBySid(channelSid: string): Promise<void>;
    static joinAndInitChannel(channel: Channel): void;
    /**
     * Signal that the chat has ended
     * @returns {Promise<void>}
     */
    static endChat(): Promise<void>;
    static leaveChat(): void;
    static setupChannelListeners(channel: Channel): void;
    private static setEngagementStage;
    static unloadChatBySid(channelSid: string): void;
    static onChannelJoined: (channel: Channel) => void;
    static setAvatars(channel: Channel): void;
    static getAvatarFromChannelUser(channelSid: string, identity: string): Promise<string>;
}
