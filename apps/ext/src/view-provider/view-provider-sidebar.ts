import { ExtensionContext, WebviewView, WebviewViewProvider, Disposable, workspace } from 'vscode';
import { AbstractViewProvider } from './view-provider-abstract';
import { routes } from '@hf/ext-common';
import { Messenger } from 'vscode-messenger';
import { MessageParticipant } from 'vscode-messenger-common';

export class ViewProviderSidebar extends AbstractViewProvider {
  constructor(context: ExtensionContext, messenger: Messenger) {
    super(context, messenger, {
      distDir: 'out/view-vue',
      indexPath: 'out/view-vue/index.html',
      routePath: routes.b.about.path
    });
  }

  async resolveWebviewView(webviewView: WebviewView) {
    const { webview } = webviewView;
    webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri]
    };

    const webviewHtml = await this.getWebviewHtml(webview);
    webview.html = webviewHtml;

    this.messenger.registerWebviewView(webviewView);

    const disposables: Disposable[] = [];

    disposables.push(this.messenger.onRequest({ method: 'add' }, async (number: number) => {
        console.log("🚀 ~ ViewProviderSidebar ~ disposables.push ~ number:", number);
        return 100 + number;
    }));

    disposables.push(this.messenger.onRequest({ method: 'fetchTheme' }, async () => {
      return workspace.getConfiguration().get('workbench.colorTheme');
  }));

  disposables.push(this.messenger.onRequest({ method: 'updateTheme' }, async (colorTheme: string) => {
    await workspace.getConfiguration().update('workbench.colorTheme', colorTheme);
    return 'Theme updated successfully';
  }));

    webviewView.onDidDispose(() => disposables.forEach(disposable => disposable.dispose()));
  }
}