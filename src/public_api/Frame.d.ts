import { FlexWebChat } from "./FlexWebChat";
import { Config } from "../state/AppConfig";
/**
 * Create Twilio Flex WebChat
 *
 * @param {FlexWebChat#Config} [userConfiguration] configuration object
 */
export declare function createWebChat(userConfiguration?: Config): Promise<FlexWebChat>;
