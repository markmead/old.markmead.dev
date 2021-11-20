<template>
  <div class="py-16 sm:py-32">
    <page-banner
      title="Shopify Guides"
      text="Here are some short, to the point Shopify guides that can be used as learning and reference resource."
    />

    <section>
      <div class="max-w-screen-xl px-4 mx-auto mt-12">
        <post-grid :posts="posts" type="shopify-slug" />
      </div>
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
