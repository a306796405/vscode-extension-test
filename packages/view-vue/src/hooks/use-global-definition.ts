import { ref, type Ref } from 'vue'
import { join } from 'path-browserify' // 下载：pnpm i -w path-browserify

const { publicPath, routePath } = __webview_opts__;
console.log("🚀 ~ __webview_opts__:", __webview_opts__)

export function useRoutePath(): Ref<string> {
  return ref(routePath)
}

export function usePublicPath(relativePath: string): Ref<string> {
  // 如果是base64则不需要转换
  if(isBase64(relativePath)) {
    return ref(relativePath)
  }
  const path = join(publicPath, relativePath)
  return ref(path)
}

export function isBase64(str: string) {
  if (str ==='' || str.trim() ==='') { return false; }
  try {
      return btoa(atob(str)) == str;
  } catch (err) {
      return false;
  }
}