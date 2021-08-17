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
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        crossorigin: true,
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylehseet",
        href:
          "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap"
      }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  modules: [],
  build: {},
  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  }
};
