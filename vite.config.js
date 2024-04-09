import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        trackImage: resolve(__dirname, "trackImage/index.html"),
        trackFace: resolve(__dirname, "trackFace/index.html"),
        trackLocation: resolve(__dirname, "trackLocation/index.html"),
        adDemo: resolve(__dirname, "adDemo/index.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./assets/css/global.scss";',
      },
    },
  },
});
