'use strict';

// Electronのモジュール
const electron = require("electron");

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
// Electronの初期化完了後に実行
app.on('load',function(){
  console.log("aaaa");
});


app.on('ready', function() {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  var electronScreen = electron.screen
  var size = electronScreen.getPrimaryDisplay().workAreaSize
  console.log(size.width, size.height);
  mainWindow = new BrowserWindow({
    width: 175,
    //height: 390,
    transparent: true,
    frame: false,
    // x: size.width,
    // y: 350
    hasShadow: false,
  });
  mainWindow.setPosition(size.width-175,size.height-375)
  // mainWindow.setIgnoreMouseEvents(true);
  mainWindow.setAlwaysOnTop(true);
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // ウィンドウが閉じられたらアプリも終了

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
