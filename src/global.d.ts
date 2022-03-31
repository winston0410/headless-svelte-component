// REF https://stackoverflow.com/questions/62761623/how-do-you-import-a-svelte-component-in-a-typescript-file

declare module '*.svelte' {
    export { SvelteComponentDev as default } from 'svelte/internal';
}
