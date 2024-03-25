import { WebviewView, Disposable, commands, WebviewPanel } from "vscode";
import { Messenger } from "vscode-messenger";

export default function registerMessenger(webviewPanel: WebviewPanel,  messenger: Messenger, ) {
    const disposables: Disposable[] = [];

    disposables.push(messenger.onRequest({ method: 'fullName' }, async (firstName: string) => {
        console.log("🚀 ~ ViewProviderPanel ~ disposables.push ~ firstName:", firstName);
        return `${firstName} Jiang`;
    }));

    disposables.push(commands.registerCommand('xingxingzi.sendMessenger', async () => {
      console.log('start to send messenger');
      const fullName = await messenger.sendRequest(
        {
         method: 'babyName'
        }, 
        { type: 'webview', webviewType: 'panel-view-container' },
        'Jiang'
      );
      console.log('fullName:', fullName);
    }));
    

    webviewPanel.onDidDispose(() => disposables.forEach(disposable => disposable.dispose()));
}