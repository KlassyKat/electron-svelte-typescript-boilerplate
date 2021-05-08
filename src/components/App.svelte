<script lang="ts">
    interface HelloWorld {
        greeting: string,
        svelte: boolean,
        typescript: boolean
    }
    let helloWorld: HelloWorld = {
        greeting: "Hello, World",
        svelte: true,
        typescript: true
    }

    // Accessing our Context Bridge(preload.ts)
    window.api.ipcSend("example", "test msg");
</script>

<style>
    #app {
        color: white;
        font-family: 'Courier New', Courier, monospace;
    }
</style>

<div id="app">
    <h1>{helloWorld.greeting}</h1>
    <span>Svelte: {helloWorld.svelte}</span>
    <br>
    <span>Typescript: {helloWorld.typescript}</span>
</div>