<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto lg:py-32">
    <page-banner
      title="Shopify Guides"
      text="Here are some short, to the point Shopify guides that can be used as learning and reference resource."
    />

    <section class="mt-12">
      <post-grid :posts="posts" type="shopify-slug" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('shopify')
      .where({ published: true })
      .sortBy('title')
      .fetch()

    return { posts }
  },
  head() {
    return {
      title: 'Shopify Guides',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Short, informative guides for Shopify developers',
        },
      ],
    }
  },
}
</script>
