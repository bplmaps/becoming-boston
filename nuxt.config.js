export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Becoming Boston',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#1d1e2c' },
      { name: 'theme-color', content: '#1d1e2c' },
      { name: 'og:site_name', content: 'Becoming Boston · Leventhal Map & Education Center' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:js956k46x/232,218,6602,4095/,2000/0/default.jpg' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@bplmaps' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://use.typekit.net', crossorigin: true },
      { rel: 'stylesheet', href: 'https://use.typekit.net/xnk4qem.css' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },

  image: {
    quality: 80,
    // Define screen sizes used by `@nuxt/image`:
    // These are sync'd with breakpoints specified for tailwind
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1680
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/router-callbacks', mode: 'client' },
    { src: '~/plugins/vuelayers.js', mode: 'client' },
    { src: '~/plugins/openseadragon.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '~/modules/vuelayers'
  ],

  content: {
    markdown: {
      remarkPlugins: ['@ngsctt/remark-smartypants']
    }
  },

  router: {
    base: '/digital-exhibitions/becoming-boston/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
    transpile: [
      'decode-named-character-reference',
      'character-entities'
    ]
  }
}
