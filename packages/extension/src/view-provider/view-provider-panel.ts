import { ExtensionContext, WebviewPanel } from 'vscode'
import { AbstractViewProvider } from './view-provider-abstract'

export class ViewProviderPanel extends AbstractViewProvider {
  
  constructor(context: ExtensionContext) {
    // controller,
    super(context, {
      distDir: 'out/view-react',
      indexPath: 'out/view-react/index.html',
    })
  }

  async resolveWebviewView(webviewView: WebviewPanel) {
    const { webview } = webviewView
    webview.options = {
      enableScripts: true,
      // localResourceRoots: [this.context.extensionUri]
    }
    // this.setControllers(webview)
    webview.html = await this.getWebviewHtml(webview)
  }
}