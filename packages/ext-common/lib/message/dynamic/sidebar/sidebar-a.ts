import { MessageInfo } from "@/message/type";

const messageInfo: MessageInfo = {
    participant: { type: 'extension', extensionId: 'sidebar-view-container' },
    methods: {
        FETCH_THEME: 'FETCH_THEME',
        UPDATE_THEME: 'UPDATE_THEME',
        OPEN_PANEL: 'OPEN_PANEL'
    },
    commands: {
        
    }
}

export default messageInfo;