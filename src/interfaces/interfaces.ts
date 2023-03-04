export enum ChatType {
    USER = "USER",
    BOT = "BOT"
}

export interface ChatInterface {
    type: ChatType;
    text: string;
}