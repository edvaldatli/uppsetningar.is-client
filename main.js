'use strict';
const {app, BrowserWindow} = require('electron');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 1200,
        width: 1400,
        titleBarStyle: 'hiddenInset'
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
