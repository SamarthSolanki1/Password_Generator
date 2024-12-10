import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Password_Generator/', // Replace 'repository-name' with the name of your GitHub repository
})

