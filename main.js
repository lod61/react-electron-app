const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  console.log('Creating window...');
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  const indexPath = path.join(__dirname, 'dist', 'index.html');
  console.log('Attempting to load file:', indexPath);
  
  if (fs.existsSync(indexPath)) {
    console.log('index.html file exists');
  } else {
    console.error('index.html file does not exist');
  }

  mainWindow.loadFile(indexPath)
    .then(() => {
      console.log('File loaded successfully');
    })
    .catch(e => {
      console.error('Failed to load app:', e);
      app.quit();
    });

  mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Page failed to load:', errorCode, errorDescription);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  console.log('App is ready');
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
