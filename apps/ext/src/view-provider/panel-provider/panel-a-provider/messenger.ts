import { messages } from "@hf/ext-common";
import { WebviewView, Disposable, commands, WebviewPanel } from "vscode";
import { Messenger } from "vscode-messenger";

export default function registerMessenger(webviewPanel: WebviewPanel,  messenger: Messenger, ) {
    const disposables: Disposable[] = [];
    const { panel: { panelA: { methods } }} = messages;
    console.log("🚀 ~ registerMessenger ~ methods:", methods)

    disposables.push(
        messenger.onNotification({ method: methods.SHOW_PANEL }, async (command) => {
            commands.executeCommand('Command.exec', command);
        }
    ));

    webviewPanel.onDidDispose(() => disposables.forEach(disposable => disposable.dispose()));
}