import { defineConfig } from 'vite'; // Import defineConfig from vite

export default defineConfig({ // Export default defineConfig
    base: "./",
    build: {
        minify: "terser",
    },
});