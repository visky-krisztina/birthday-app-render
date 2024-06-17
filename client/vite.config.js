import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5100/api",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	version: 2,
	builds: [
		{
			src: "package.json",
			use: "@vercel/static-build",
			config: {
				distDir: "build",
			},
		},
	],
	routes: [{ src: "/(.*)", dest: "/index.html" }],
});
