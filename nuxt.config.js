export default {
  /*
   ** Global headers for each page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "My Nuxt Site",
    // meta tags
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Basic Nuxt Site from Leigh" || "",
      },
    ],
    // links (css should be here)
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // javascript files
    script: [],
  },
  /**
   * Global Middleware
   */
  router: {
    middleware: ["test"],
  },
  /**
   * Server Middleware
   * for APIs
   */
  serverMiddleware: [
    // 'redirect-ssl',
    { path: "/api", handler: "~/api/index.js" },
  ],
  /**
   * Server configuration
   */
  server: {
    port: 3000, // default: 3000
    // host: "0.0.0.0", // default: localhost
  },
  /**
   * Environment variabes
   */
  publicRuntimeConfig: {
    // available on both client & server
    API_URL: process.env.baseURL || "localhost:3000",
  },
  privateRuntimeConfig: {
    // available on server only. takes precedence over publicRuntimeConfig
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module', // <- removed eslint
    "@nuxtjs/tailwindcss", // <- installed with 'npm install --save-dev @nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
