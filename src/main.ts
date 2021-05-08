import * as path from "path";
import {
    app,
    BrowserWindow,
    ipcMain
} from "electron";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow;

const production: boolean = (process.env.NODE_ENV || "production") === "production";
if (!production) {
    require("electron-reload")(__dirname);
}

function launch() {
    win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile(path.join(__dirname, "../index.html"));

    win.on("closed", () => {
        win = null;
    });
}

app.on("ready", launch);

//Example to be deleted
ipcMain.on('example', (e, data) => {
    console.log(`Context Bridge: ${data}.`);
});


app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        launch();
    }
});