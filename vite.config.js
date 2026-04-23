import react from "@vitejs/plugin-react";
import fs from "fs";
import { defineConfig } from "vite";

const basePath = process.env.VITE_BASE_PATH || "/tabs/home/";

export default defineConfig({
  plugins: [react()],
  base: basePath,
  esbuild: {
    tsconfigRaw: fs.readFileSync("./tsconfig.app.json"),
  },
});
