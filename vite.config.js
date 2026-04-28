import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5174,
    strictPort: true,
  },
  base: './',
  plugins: [
    {
      name: 'log-production-url',
      configureServer(server) {
        server.httpServer.on('listening', () => {
          setTimeout(() => {
            console.log(`  \x1b[32m➜\x1b[0m  \x1b[1mProduction:\x1b[0m \x1b[36mhttps://Bavuong24020008.github.io/\x1b[0m`)
          }, 100)
        })
      }
    }
  ]
})

