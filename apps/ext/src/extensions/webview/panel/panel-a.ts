import { ExtensionContext, window, commands, ViewColumn } from 'vscode';
import { Messenger } from 'vscode-messenger';
import { ViewProviderPanel } from '../../../view-provider/panel-provider/panel-a-provider/provider';
import { messages } from '@hf/ext-common';

export default function entry(context: ExtensionContext, messenger: Messenger){
  const { panel: { panelA } } = messages;
   // 注册react panel view指令
  const panelViewDisposable = commands.registerCommand(panelA.commands.SHOW_PANEL, () => {
    const panel = window.createWebviewPanel('panel-view-container', 'Panel View', ViewColumn.One, {
      enableScripts: true
    });
    // react panel view 实例化
    const viewProviderPanel = new ViewProviderPanel(context, messenger);
    viewProviderPanel.resolveWebviewView(panel);
  });

  // subscriptions 列表中的 disposable, 会在插件失活时被执行
  context.subscriptions.push(panelViewDisposable);
}


