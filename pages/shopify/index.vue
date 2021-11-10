<template>
  <div class="py-16 sm:py-32">
    <section>
      <div class="container">
        <h1 class="font-serif text-5xl sm:text-8xl">Shopify Guides</h1>

        <p
          class="mt-12 text-2xl font-medium leading-tight sm:text-5xl sm:leading-tight"
        >
          I don't like long blog posts, so here you will find short, to the
          point blogs that will enhance your skill set.
        </p>
      </div>
    </section>

    <section>
      <div class="container mt-12">
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
