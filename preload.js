const { contextBridge } = require('electron');

require('dotenv').config();

contextBridge.exposeInMainWorld('env', {
    API_URL: process.env.API_URL
});