export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Barahlito',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="styleshee' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // progreess-bar
  loading: { color: '#e32363', height: '4px', duration: 5000 },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://vue-nuxt-blog-b995c-default-rtdb.firebaseio.com',
    credentials: false
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://vue-nuxt-blog-b995c-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyDo8hm4DmJyvrXMem1ts1LYVRoO-ZpNwKc'
  },

  router: {
    middleware: 'log'
  }
}
