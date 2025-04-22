import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          '@/utils/common': ['comm'],
          '@/config/config': ['baseURL']
        }
      ],
      dts: true
    }),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' }
      ],
      extensions: ['jsx'],
      importMode: 'sync',
      importPathTransform: (path) => {
        return path.replace(/\.jsx$/, '')
      }
    })
  ],

  // 기본경로 설정
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ],
  },

  // 로컬 서버프록시 설정
  server: {
    proxy: {
      '/api': {
        target: 'http://server:5001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  },
  
  // 빌드 디렉터리 설정
  build: {
    outDir: 'dist'
  }
})
