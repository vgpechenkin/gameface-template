import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte()],
    base: './',
    build: {
        target: 'es2015',
        // rollupOptions: {
        //     output: {
        //         entryFileNames: `assets/[name].js`,
        //         chunkFileNames: `assets/[name].js`,
        //         assetFileNames: `assets/[name].[ext]`,
        //     },
        // },
    },
})
