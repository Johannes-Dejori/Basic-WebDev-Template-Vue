import cssInjectedByJsPlugin  from "vite-plugin-css-injected-by-js"
import { createHtmlPlugin }   from "vite-plugin-html"
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '',
  build: 
  { minify:  'terser',
    terserOptions: 
    { output: { comments: false } },
  },
  plugins:
  [ vue(),
    cssInjectedByJsPlugin(),
    createHtmlPlugin({ minify: true }),
  ],
  resolve:
  { alias: 
    { '@':      fileURLToPath(new URL('./src',                  import.meta.url)),
      '/css':   fileURLToPath(new URL('./src/css',              import.meta.url)),
      'config': fileURLToPath(new URL('./src/css/_config.scss', import.meta.url)),
    }
  },
})
