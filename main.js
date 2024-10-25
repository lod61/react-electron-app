const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

console.log('Electron main process starting...');
console.log('ELECTRON_START_URL:', process.env.ELECTRON_START_URL);

function loadURL(url, retries = 30) {
  mainWindow.loadURL(url)
    .then(() => console.log('Window loaded successfully'))
    .catch(err => {
      console.error(`Failed to load window (attempt ${31 - retries}/30):`, err);
      if (retries > 0) {
        console.log(`Retrying in 1 second...`);
        setTimeout(() => loadURL(url, retries - 1), 1000);
      } else {
        console.error('Max retries reached, unable to load window');
        app.quit();
      }
    });
}

function createWindow() {
  console.log('Creating window...');
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
      webSecurity: false
    },
  });

  const startUrl = process.env.ELECTRON_START_URL || `file://${path.join(__dirname, './dist/index.html')}`;
  
  console.log('Loading URL:', startUrl);
  
  loadURL(startUrl);

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Page failed to load:', errorCode, errorDescription);
  });

  mainWindow.webContents.openDevTools();

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
