import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ⬅️ یہ لائن

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ⬅️ یہ پلگ ان
  ],
})