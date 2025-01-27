import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  base: "/news-spot/", // Update with your new repo name
  plugins: [react()],
});
