import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {

  //   proxy : {
  //     target : "http://localhost:3002/",
  //     secure : true
  //   }
  // },
  plugins: [react()],
})
