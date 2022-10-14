import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwa = {
    filename: 'worker.js',
    manifestFilename: 'manifest.json',
    manifest: {
        name: '{Todo}',
        short_name: '{Todo}',
        icons: [{
            src: '192x192.png',
            sizes: '192x192',
            type: 'image/png'
        }, {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png'
        }],
        background_color: '#000',
        theme_color: '#000',
    }
} as Partial<VitePWAOptions>;

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [svelte(), VitePWA(pwa)]
});
