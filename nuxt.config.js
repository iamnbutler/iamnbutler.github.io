require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },

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
  plugins: [
    { src: '~/plugins/p5.min.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    // Color mode docs: https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",
    // Nuxt Content: https://content.nuxtjs.org/ & Tutorial: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/
    "@nuxt/content",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/cloudinary"],

  colorMode: {
    classSuffix: "",
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/yaminateo/image/upload/",
    },
  },
  cloudinary: {
    cloudName: "process.env.CLOUDINARY_CLOUDNAME",
    apiKey: "process.env.CLOUDINARY_API_KEY",
    apiSecret: "process.env.CLOUDINARY_API_SECRET",
  },
};
