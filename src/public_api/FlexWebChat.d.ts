import * as AppConfig from "../state/AppConfig";
import { Config } from "../state/AppConfig";
import * as Constants from "../constants";
import { Manager } from "../core/Manager";
/**
 * Flex WebChat
 * Create a single instance using {@link FlexWebChat.create create} method.
 */
export declare class FlexWebChat {
    private _manager;
    private constructor();
    /**
     * Creates Flex WebChat. In most cases you need only one {@link Manager} instance - the method should be called only once.
     */
    static create(userConfiguration: Config): Promise<FlexWebChat>;
    readonly manager: Manager;
    /**
     * Loads a customer frame to the provided container.
     */
    init(): this;
    /**
     * Configures the Customer Frame. This method should be called before loading any channels.
     * @param {FlexWebChat#ChatConfig} userConfiguration configuration object
     */
    configure(userConfiguration: AppConfig.Config): void;
    /**
     * Appends the div that renders customer frame into body
     * @param {string} containerId
     */
    createFrameDiv(containerId: string): void;
    /**
     * Switches engagement stage.  Mostly used for development.
     * @param {EngagementStage} engagementStage
     */
    setStage(engagementStage: Constants.EngagementStage): void;
}
