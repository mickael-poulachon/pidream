const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const url = require("url");
const path = require("path");
const usbDetect = require('usb-detection');
const drivelist = require('drivelist');
const drives = drivelist.list();
drives.then(result => console.log(result));


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('ping', (event, arg) => {
  console.log('la',arg) // affiche "ping"
  event.reply('ping', 'pong')
})

ipcMain.on('ping', (event, arg) => {
  console.log('ici',arg) // affiche "ping"
  event.returnValue = 'pong'
})


usbDetect.startMonitoring();

// Get a list of USB devices on your system, optionally filtered by `vid` or `pid`

// Promise version of `find`:
//usbDetect.find().then(function(devices) { console.log(devices); }).catch(function(err) { console.log(err); });

// Allow the process to exit
//usbDetect.stopMonitoring()
