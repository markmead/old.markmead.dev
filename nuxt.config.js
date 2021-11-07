let siteData = {
  url: 'https://markmead.dev/',
  title: 'Shopify Developer in the UK | Mark Mead',
  description: 'Shopify and Ruby on Rails developer in the United Kingdom.',
}

let posts = []

const constructFeedItem = (post, dir, hostname) => {
  const url = `${hostname}/${dir}/${post.slug}`

  return {
    title: post.title,
    id: url,
    link: url,
    content: post.bodyPlainText,
  }
}

const create = async (feed, args) => {
  const { $content } = require('@nuxt/content')
  const [filePath, ext] = args
  const hostname = siteData.url

  feed.options = {
    title: 'Development Blogs',
    description: 'Short and to the point development blogs.',
    link: `${hostname}/feed.${ext}`,
  }

  posts = await $content(filePath)
    .where({ published: true })
    .sortBy('title')
    .fetch()

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname)

    feed.addItem(feedItem)
  }

  return feed
}

export default {
  target: 'static',
  head: {
    titleTemplate: titleChunk => `${titleChunk} | Mark Mead`,
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: siteData.description,
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: siteData.url },
      { property: 'og:title', content: siteData.title },
      { property: 'og:description', content: siteData.description },
      { property: 'og:image', content: `${siteData.url}social.jpg` },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: siteData.url },
      { property: 'twitter:title', content: siteData.title },
      { property: 'twitter:description', content: siteData.description },
      { property: 'twitter:image', content: `${siteData.url}social.jpg` },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@nuxt/content',
    '@nuxtjs/feed',
  ],
  modules: [],
  build: {},
  googleFonts: {
    display: 'swap',
    families: {
      'DM+Serif+Display': true,
      'DM+Sans': [400, 500, 700],
    },
  },
  content: {
    markdown: {
      prism: { theme: false },
    },
  },
  googleAnalytics: {
    id: 'UA-177960351-3',
    checkDuplicatedScript: true,
  },
  feed: [
    {
      path: '/feed.xml',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: ['blogs', 'xml'],
    },
  ],
  hooks: {
    'content:file:beforeInsert': document => {
      if (document.extension === '.md') {
        document.bodyPlainText = document.text
      }
    },
  },
}
