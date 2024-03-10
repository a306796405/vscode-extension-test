import 'reflect-metadata'
import * as vscode from 'vscode'
import { ViewProviderSidebar } from './view-provider/view-provider-sidebar'
import { ViewProviderPanel } from './view-provider/view-provider-panel'
// import { getControllers } from 'cec-client-server/decorator';

export function activate(context: vscode.ExtensionContext) {
	// const { callables, subscribables } = getControllers()
  // vue sibebar view 实例化
  const viewProvidersidebar = new ViewProviderSidebar(context)
  // 注册vue sidebar view
  const sidebarViewDisposable = vscode.window.registerWebviewViewProvider(
    'sidebar-view-container',
    viewProvidersidebar,
    { webviewOptions: { retainContextWhenHidden: true } }
  )

  // 注册react panel view指令
  const panelViewDisposable = vscode.commands.registerCommand('panel-view-container.show', () => {
    const panel = vscode.window.createWebviewPanel('panel-view-container', 'Panel View', vscode.ViewColumn.One, {})
    // react panel view 实例化
    const viewProviderPanel = new ViewProviderPanel(context)
    viewProviderPanel.resolveWebviewView(panel)
  })

  // subscriptions 列表中的 disposable, 会在插件失活时被执行
  context.subscriptions.push(sidebarViewDisposable, panelViewDisposable)
}

export function deactivate() {}

