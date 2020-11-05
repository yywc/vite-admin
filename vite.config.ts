import { resolve } from 'path'

export default {
  // proxy: {
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     rewrite: path => path.replace(/^\/api/, '')
  //   }
  // },
  cssPreprocessOptions: {
    less: {
      javascriptEnabled: true,
    },
  },
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  alias: {
    '/@/': resolve(__dirname, 'src'),
  },
}
