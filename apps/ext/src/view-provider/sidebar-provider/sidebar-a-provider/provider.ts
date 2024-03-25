import { ExtensionContext, WebviewView } from 'vscode';
import { AbstractViewProvider } from '../../view-provider-abstract';
import { routes } from '@hf/ext-common';
import { Messenger } from 'vscode-messenger';
import registerMessenger from './messenger';

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
    registerMessenger(webviewView, this.messenger)
  }
}