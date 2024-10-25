import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		'no-speed-no-btc.reminder',
		async () => {
			vscode.window.showInformationMessage('NO SPEED, NO BTC!');
		}
	);

	context.subscriptions.push(disposable);
}

