import { MessageParticipant } from "vscode-messenger-common";


export type MessageInfo = {
    participant: MessageParticipant;
    methods: Record<string, string>,
    commands: Record<string, string>
}