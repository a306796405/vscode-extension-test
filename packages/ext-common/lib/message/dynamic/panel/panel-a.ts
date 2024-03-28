import { MessageInfo } from "@/message/type";

const messageInfo: MessageInfo = {
    participant: { type: 'extension', extensionId: 'panel-view-container' },
    methods: {
        SHOW_PANEL: 'SHOW_PANEL'
    },
    commands: {
        SHOW_PANEL: 'panel-a.show',
    }
}

export default messageInfo;