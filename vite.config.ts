import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    base: "https://awesome-arts.fabian.li/",
    /*server: {
        host: "0.0.0.0",
        port: 5173,
        strictPort: true,
    },*/
});
