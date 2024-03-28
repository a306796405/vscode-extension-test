// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/jianglinjie/learning/vscode-extension-test/node_modules/.pnpm/vite@5.2.6_@types+node@20.11.30/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jianglinjie/learning/vscode-extension-test/node_modules/.pnpm/vite-plugin-dts@3.7.3_typescript@5.4.3_vite@5.2.6/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/jianglinjie/learning/vscode-extension-test/packages/ext-common";
var vite_config_default = defineConfig({
  plugins: [
    dts()
  ],
  resolve: {
    alias: {
      "@": _resolve("lib")
    }
  },
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "ext-common",
      fileName: "ext-common"
    }
  }
});
function _resolve(dir) {
  return path.resolve(__vite_injected_original_dirname, dir);
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamlhbmdsaW5qaWUvbGVhcm5pbmcvdnNjb2RlLWV4dGVuc2lvbi10ZXN0L3BhY2thZ2VzL2V4dC1jb21tb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qaWFuZ2xpbmppZS9sZWFybmluZy92c2NvZGUtZXh0ZW5zaW9uLXRlc3QvcGFja2FnZXMvZXh0LWNvbW1vbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamlhbmdsaW5qaWUvbGVhcm5pbmcvdnNjb2RlLWV4dGVuc2lvbi10ZXN0L3BhY2thZ2VzL2V4dC1jb21tb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgZHRzKClcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IF9yZXNvbHZlKCdsaWInKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICcuL2xpYi9tYWluLnRzJyxcbiAgICAgIG5hbWU6ICdleHQtY29tbW9uJyxcbiAgICAgIGZpbGVOYW1lOiAnZXh0LWNvbW1vbidcbiAgICB9XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIF9yZXNvbHZlKGRpcjogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBkaXIpXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxPQUFPLFVBQVU7QUFDbFosU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFNBQVMsS0FBSztBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQUVELFNBQVMsU0FBUyxLQUFhO0FBQzdCLFNBQU8sS0FBSyxRQUFRLGtDQUFXLEdBQUc7QUFDcEM7IiwKICAibmFtZXMiOiBbXQp9Cg==
