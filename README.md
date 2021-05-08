<p align="center">
<img src="./buildResources/icon.png" align="center">
</p>

<h1 align="center">svelte-electron-ts-starter</h1>

## Features
- [`electron-builder`](https://www.electron.build) for building complete apps.
- Hot Reload
- Preconfigured Context Bridge for building secure best practice Electron App.
- Write Typescript in Main Process and in Svelte Components.
- Minimal, easy to digest starting point.


## Installation
Clone repository to get started

In Project Directory
```
npx degit KlassyKat/electron-svelte-typescript-boilerplate
npm install
```
Or to create new project directory
```
npx degit KlassyKat/electron-svelte-typescript-boilerplate <app-name>
cd <app-name>
npm install
```

## Develop
Start watching project files with rollup
```
npm run dev
```
In another terminal start electron
```
npm run start
```
You could moify the package.json to run these commands together in the same terminal with something like [`concurrently`](https://www.npmjs.com/package/concurrently) but I prefer the terminal output having these seperate.

## Build
This template uses [`electron-builder`](https://www.electron.build) for building out electron apps. This boilerplate does some configuration in package.json to give a feel for it and give some good defaults but it's reccomended you take a look at [`electron-builder`](https://www.electron.build) as every project has its own requirements. 

Respective build commands are
```
npm run build:all
npm run build:win
npm run build:linux
npm run build:mac
```
