require("dotenv").config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  components: true, // https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#adding-a-vue-component
  // Auto importing components will not work for <nuxt-content> unless we globally register them by adding a global folder inside the components folder.

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nate Butler",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "hiiii",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  css: [
    '@/static/css/prismjs-theme.css',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/cloudinary"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    // Color mode docs: https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",
    "nuxt-font-loader",
    // Nuxt Content: https://content.nuxtjs.org/ & Tutorial: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/
    "@nuxt/content",
    "@nuxt/image"
  ],

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },

  // ==
  // Module configs
  // ==

  cloudinary: {
    cloudName: "process.env.CLOUDINARY_CLOUDNAME",
    apiKey: "process.env.CLOUDINARY_API_KEY",
    apiSecret: "process.env.CLOUDINARY_API_SECRET",
  },

  colorMode: {
    classSuffix: "",
  },

  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },

  fontLoader: {
    url: {
      local: "/fonts/font-face.css",
      google:
        "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;700&display=swap",
    },
    prefetch: true,
    preconnect: true,
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/yaminateo/image/upload/",
    },
  },
};
