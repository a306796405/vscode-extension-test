import { ExtensionContext, WebviewView, WebviewViewProvider } from 'vscode'
import { AbstractViewProvider } from './view-provider-abstract'
import { routes } from '@hf/ext-common'

export class ViewProviderSidebar extends AbstractViewProvider {
  constructor(context: ExtensionContext) {
    super(context, {
      distDir: 'out/view-vue',
      indexPath: 'out/view-vue/index.html',
      routePath: routes.b.about.path
    })
  }

  async resolveWebviewView(webviewView: WebviewView) {
    const { webview } = webviewView
    webview.options = {
      enableScripts: true,
      // localResourceRoots: [this.context.extensionUri]
    }

    const webviewHtml = await this.getWebviewHtml(webview)
    webview.html = webviewHtml
  }
}