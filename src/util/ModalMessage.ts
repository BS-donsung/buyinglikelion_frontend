export interface MessageAction {
    text : string,
    action : () => void
}

export interface Message {
    header? : string
    contents : string;
    positive_action? : MessageAction;
    negative_action? : MessageAction;
}

