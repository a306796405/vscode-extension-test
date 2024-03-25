import { ExtensionContext, WebviewPanel, Disposable, commands } from 'vscode';
import { AbstractViewProvider } from './view-provider-abstract';
import { Messenger } from 'vscode-messenger';
import { routes } from '@hf/ext-common';

export class ViewProviderPanel extends AbstractViewProvider {
  
  constructor(context: ExtensionContext, messenger: Messenger) {
    // controller,
    super(context, messenger, {
      // distDir: 'out/view-react',
      // indexPath: 'out/view-react/index.html',
      distDir: 'out/view-vue',
      indexPath: 'out/view-vue/index.html',
      routePath: routes.a.home.path
    });
  }

  async resolveWebviewView(webviewPanel: WebviewPanel) {
    const { webview } = webviewPanel;
    webview.options = {
      enableScripts: true,
      // localResourceRoots: [this.context.extensionUri]
    };
    // this.setControllers(webview)
    webview.html = await this.getWebviewHtml(webview);

    this.messenger.registerWebviewPanel(webviewPanel);

    const disposables: Disposable[] = [];

    disposables.push(this.messenger.onRequest({ method: 'fullName' }, async (firstName: string) => {
        console.log("🚀 ~ ViewProviderPanel ~ disposables.push ~ firstName:", firstName);
        return `${firstName} Jiang`;
    }));

    disposables.push(commands.registerCommand('xingxingzi.sendMessenger', async () => {
      console.log('start to send messenger');
      const fullName = await this.messenger.sendRequest(
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
}