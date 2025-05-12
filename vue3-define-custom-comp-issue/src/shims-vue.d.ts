/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly MODE: string
  // 添加其他自定义环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
