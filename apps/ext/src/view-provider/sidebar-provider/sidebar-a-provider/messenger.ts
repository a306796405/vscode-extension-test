import { WebviewView, Disposable, workspace, commands } from "vscode";
import { Messenger } from "vscode-messenger";
import { messages } from '@hf/ext-common';

export default function registerMessenger(webviewView: WebviewView,  messenger: Messenger) {
    const disposables: Disposable[] = [];
    const { sidebar: { sidebarA: { methods } }} = messages;

    disposables.push(
        messenger.onRequest({ method: methods.FETCH_THEME }, async () => {
            return workspace.getConfiguration().get('workbench.colorTheme');
        }
    ));

    disposables.push(
        messenger.onRequest({ method: methods.UPDATE_THEME }, async (colorTheme: string) => {
            await workspace.getConfiguration().update('workbench.colorTheme', colorTheme);
            return 'Theme updated successfully';
        }
    ));

    webviewView.onDidDispose(() => disposables.forEach(disposable => disposable.dispose()));
}