import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then((i) => i.default)

  return {
    plugins: [uni(), UnoCss(), vueDevTools()],
    resolve: {
      alias: {
        '@': '/src',
        '@image': '/src/static/image',
      },
    },
    server: {
      port: 8888,
      proxy: {
        '/server': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/server/, ''),
        },
      },
    },
  }
})
