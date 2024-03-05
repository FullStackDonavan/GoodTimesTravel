
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: {
    "dirs": [
      {
        "path": "~/components", 
        "global": true,
        pathPrefix: false,
        preload: true,
      }
      
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', 'nuxt-icon', '@nuxt/image','@nuxtjs/seo'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'vue',
      ]
    },
    navigation: {
      fields: ['author', 'subject', 'position']
    }
  },
  runtimeConfig: {
    private: {
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      db: process.env.POSTGRES_PRISMA_URL,
    },
    public: {
      GHL_API_KEY: process.env.GHL_API_KEY,
      appDomain: process.env.APP_DOMAIN,
      gitHash: process.env.GITHUB_SHA,
      releaseVersion: process.env.RELEASE_VERSION,
    }
  },
  experimental: {
    writeEarlyHints: false,
  },
  image: {
    // IPX options
    ipx: {
      // Specify IPX options here
      // For example:
      // domains: ['example.com'],
      // dir: '/path/to/cache',
      // sharp: {},
      // headers: {}
    },
  },
  site: {
    url: 'http://localhost:3000/',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    // indexable: false
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'My Company',
      url: 'https://example.com',
      logo: 'https://good-times-travel.vercel.app/_vercel/image?url=%2Fimg%2Flogo_white.png&w=320&q=80'
    }
  },
  generate: {
    // Specify the routes to generate statically
    routes: ['/about-us', '/get-started'],
    // Optionally, you can define a function to dynamically generate routes
    // routes: async () => {
    //   // Fetch routes from an API or database
    //   const routes = await fetchRoutes();
    //   return routes;
    // },
  },
  nitro: {
    compressPublicAssets: true,
  },
})
