export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],
  axios: {
    baseURL: 'https://connect-pro-ai.netlify.app',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: '/api/auth/login',
          logout: '/api/auth/logout',
          user: '/api/auth/user',
        },
      },
    },
  },
  sitemap: {
    routes: [
      { path: '/terms', priority: 0.5 },
      { path: '/privacy', priority: 0.5 },
    ],
  },
  tailwindcss: {
    css: [
      'assets/css/tailwind.css',
    ],
  },
})