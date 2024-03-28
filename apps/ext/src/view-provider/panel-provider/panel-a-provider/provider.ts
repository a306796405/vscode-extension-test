import { ExtensionContext, WebviewPanel, Disposable, commands } from 'vscode';
import { AbstractViewProvider } from '../../view-provider-abstract';
import { Messenger } from 'vscode-messenger';
import { routes } from '@hf/ext-common';
import registerMessenger from './messenger';

export class ViewProviderPanel extends AbstractViewProvider {
  
  constructor(context: ExtensionContext, messenger: Messenger) {
    // controller,
    super(context, messenger, {
      // distDir: 'out/view-react',
      // indexPath: 'out/view-react/index.html',
      distDir: 'out/view-vue',
      indexPath: 'out/view-vue/index.html',
      routePath: routes.a.panelA.path
    });
  }

  async resolveWebviewView(webviewPanel: WebviewPanel) {
    const { webview } = webviewPanel;
    webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri]
    };
    this.messenger.registerWebviewPanel(webviewPanel);
    registerMessenger(webviewPanel, this.messenger);

    webview.html = await this.getWebviewHtml(webview);
  }
}