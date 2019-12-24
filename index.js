const {app, BrowserWindow}=require("electron");
//
const path=require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({});

    mainWindow.loadFile("index.html");

    mainWindow.on("closed", function(){
        mainWindow=null;
    });
}

app.on("ready" , createWindow);

