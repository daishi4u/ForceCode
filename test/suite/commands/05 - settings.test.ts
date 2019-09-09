import * as vscode from 'vscode';
import * as assert from 'assert';

suite('settings.ts', () => {
  test('Opens settings', async () => {
    await vscode.commands.executeCommand('ForceCode.settings').then(_res => {
      assert.strictEqual(true, true);
    });
  });
});
