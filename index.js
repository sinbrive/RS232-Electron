const {app, BrowserWindow}=require("electron");
//
const path=require("path");
const url=require("url");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width:800, height:600});

    mainWindow.loadFile("index.html");

    mainWindow.on("closed", function(){
        mainWindow=null;
    });
}

app.on("ready" , createWindow);

