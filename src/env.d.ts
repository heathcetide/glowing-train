/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component

  export interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
    readonly VITE_LOCAL_BASE_URL: string
    readonly VITE_PROXY_URL_PREFIX: string
    readonly VITE_PROXY_URL: string
    readonly VITE_PROXY_ENABLE: string
  }
}
