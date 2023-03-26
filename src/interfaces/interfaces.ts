export enum ChatType {
    USER = "user",
    BOT = "assistant",
}

// export interface ChatInterface {
//     type: ChatType;
//     text: string;
// }

export interface Message {
    role: string;
    content: string;
}