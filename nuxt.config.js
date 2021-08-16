export default {
  target: "static",
  head: {
    title: "Mark Mead",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/content"
  ],
  modules: [],
  build: {},
  googleFonts: {
    display: "swap",
    families: {
      "DM+Serif+Display": true,
      "DM+Sans": [400, 500, 700]
    }
  },
  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  }
};
