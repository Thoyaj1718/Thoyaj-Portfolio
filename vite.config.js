import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Thoyaj-Portfolio/',
  plugins: [react()],
  resolve:{
    alias:{
      crypto: 'crypto-browserify'
    }
  }
})
