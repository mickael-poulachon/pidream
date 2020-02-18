const {app, BrowserWindow} = require('electron')
const {ipcMain, dialog} = require('electron')
const url = require("url");
const path = require("path");
const usbDetect = require('usb-detection');
const drivelist = require('drivelist');
const drives = drivelist.list();
const findUp = require('find-up');
const findDown = require('find-down');
var fs = require('fs');


//drives.then(result => console.log(result));


let mainWindow

function createWindow() {
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
  });
  //ext_file_list = recFindByExt('/Volumes/EXTERNE','gdi');

  //console.log(ext_file_list);

  dialog.showOpenDialog({
    properties: ['openDirectory']
  }).then((result) => console.log(result));


  /*findUp(function(file) {
      console.log(file);
    }).then((result) => console.log('fichier : ', result));
  //=> '/Users/sindresorhus/unicorn.png'

  findUp(directory => {
    const hasUnicorns = findUp.exists(path.join(directory, 'Alita-Battle-Angel-28.jpg'));
    return hasUnicorns && directory;
  }, {type: 'directory'}).then((result) => console.log(result) );
  //=> '/Users/sindresorhus'*/
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});

/*ipcMain.on('ping', (event, arg) => {
  console.log('la',arg) // affiche "ping"
  event.reply('ping', 'pong')
})

ipcMain.on('ping', (event, arg) => {
  console.log('ici',arg) // affiche "ping"
  event.returnValue = 'pong'
})*/


//usbDetect.startMonitoring();

// Get a list of USB devices on your system, optionally filtered by `vid` or `pid`

// Promise version of `find`:
//usbDetect.find().then(function(devices) { console.log(devices); }).catch(function(err) { console.log(err); });

// Allow the process to exit
//usbDetect.stopMonitoring()


function recFindByExt(base, ext, files, result) {
  files = files || fs.readdirSync(base)
  result = result || []

  files.forEach(
    function (file) {
      var newbase = path.join(base, file)
      if (fs.statSync(newbase).isDirectory()) {
        result = recFindByExt(newbase, ext, fs.readdirSync(newbase), result)
      } else {
        if (file.substr(-1 * (ext.length + 1)) == '.' + ext) {
          result.push(newbase)
        }
      }
    }
  )
  return result
}
