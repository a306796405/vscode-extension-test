import { ExtensionContext, window } from 'vscode';
import { Messenger } from 'vscode-messenger';
import { ViewProviderSidebar } from "../../../view-provider/sidebar-provider/sidebar-a-provider/provider";

export default function entry(context: ExtensionContext, messenger: Messenger){
    // vue sibebar view 实例化
    const viewProvidersidebar = new ViewProviderSidebar(context, messenger);
    const sidebarViewDisposable = window.registerWebviewViewProvider(
        'sidebar-view-container',
        viewProvidersidebar,
        { webviewOptions: { retainContextWhenHidden: true } }
    );

    context.subscriptions.push(sidebarViewDisposable);
}

