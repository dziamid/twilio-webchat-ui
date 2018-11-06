import { Strings as FrameStrings } from "@twilio/frame-ui";
export interface Strings<T = string> extends FrameStrings<T> {
    Connecting?: T;
    Disconnected?: T;
    PendingEngagementMessage?: T;
    PendingEngagementCancelButton?: T;
    ConfirmEndEngagementMessage?: T;
    ConfirmEndEngagementConfirmButton?: T;
    ConfirmEndEngagementDenyButton?: T;
    PreEngagementMandatoryFieldMessage?: T;
    DefaultPreEngagementConfigDescription?: T;
    DefaultPreEngagementConfigNameLabel?: T;
    DefaultPreEngagementConfigEmailLabel?: T;
    DefaultPreEngagementConfigSubmitButton?: T;
}
