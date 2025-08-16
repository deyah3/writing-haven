const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', {
  ping: () => console.log("Hello from Preload!")
})

