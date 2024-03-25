import { WebviewView, Disposable, workspace } from "vscode";
import { Messenger } from "vscode-messenger";

export default function registerMessenger(webviewView: WebviewView,  messenger: Messenger) {
    const disposables: Disposable[] = [];

    disposables.push(
        messenger.onRequest({ method: 'fetchTheme' }, async () => {
            return workspace.getConfiguration().get('workbench.colorTheme');
        }
    ));

    disposables.push(
        messenger.onRequest({ method: 'updateTheme' }, async (colorTheme: string) => {
            await workspace.getConfiguration().update('workbench.colorTheme', colorTheme);
            return 'Theme updated successfully';
        }
    ));

    webviewView.onDidDispose(() => disposables.forEach(disposable => disposable.dispose()));
}