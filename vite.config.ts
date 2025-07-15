import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Fix for import.meta.dirname compatibility
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async () => {
  // Optional Replit-only plugins (skip if not on Replit)
  const replitPlugins =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          runtimeErrorOverlay(),
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
        ]
      : [runtimeErrorOverlay()];

  return {
    plugins: [react(), ...replitPlugins],

    root: path.resolve(__dirname, "client"), // 👈 your app lives in /client

    build: {
      outDir: "dist", // 👈 will be inside `client/dist`
      emptyOutDir: true,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "client", "public", "attached_Assets"),
      },
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
