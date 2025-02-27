import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then((i) => i.default)

  return {
    plugins: [uni(), UnoCss()],
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
