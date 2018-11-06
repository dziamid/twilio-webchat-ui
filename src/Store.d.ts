import { Store } from "redux";
import { AppState } from "./state/AppState";
export interface FlexState {
    readonly flex: AppState;
}
export declare function getDefaultStore(): Store<FlexState>;
export declare function createDefaultStore(): Store<FlexState>;
