//https://www.electronjs.org/docs/api/context-bridge
import { ipcRenderer, contextBridge } from 'electron';

const electronAPIKey = "api";

const electronApi = {
    ipcSend: (channel: string, ...arg: any) => {
        ipcRenderer.send(channel, arg);
    },
    ipcOn: (channel: string, listener: (event: any, ...arg: any) => void) => {
        ipcRenderer.on(channel, listener);
    }
}

contextBridge.exposeInMainWorld(
    electronAPIKey, electronApi
);

//Appease Typescript
declare global {
    interface Window {
        [electronAPIKey]: typeof electronApi
    }
}