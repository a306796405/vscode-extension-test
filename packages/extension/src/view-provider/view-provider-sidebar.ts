import { ExtensionContext, WebviewView, WebviewViewProvider } from 'vscode'
import { AbstractViewProvider } from './view-provider-abstract'

export class ViewProviderSidebar extends AbstractViewProvider {
  constructor(context: ExtensionContext) {
    super(context, {
      distDir: 'out/view-vue',
      indexPath: 'out/view-vue/index.html'
    })
  }

  async resolveWebviewView(webviewView: WebviewView) {
    const { webview } = webviewView
    webview.options = {
      enableScripts: true,
      // localResourceRoots: [this.context.extensionUri]
    }
    webview.html = await this.getWebviewHtml(webview)
  }
}