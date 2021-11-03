// const fs = require("fs").promises;
// const path = require("path");

let posts = [];

const constructFeedItem = (post, dir, hostname) => {
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.bodyPlainText
  };
};

const create = async (feed, args) => {
  const [filePath, ext] = args;
  const hostname =
    process.NODE_ENV === "production"
      ? "https://markmead.dev"
      : "http://localhost:3000";
  feed.options = {
    title: "My Blog",
    description: "Blog Stuff!",
    link: `${hostname}/feed.${ext}`
  };
  const { $content } = require("@nuxt/content");
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
};

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
    "@nuxt/content",
    "@nuxtjs/google-analytics",
    "@nuxtjs/feed"
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
  },
  googleAnalytics: {
    id: "UA-177960351-3",
    checkDuplicatedScript: true
  },
  feed: [
    {
      path: "/feed.xml",
      create,
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
      data: ["blogs", "xml"]
    }
  ],
  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        document.bodyPlainText = document.text;
      }
    }
  }
};
