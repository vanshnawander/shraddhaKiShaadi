import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This exposes the server to the local network
    port: 5173, // You can specify the port if needed
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})