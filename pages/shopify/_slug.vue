<template>
  <post-content :post="post" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { slug } = params
    const post = await $content('shopify', slug).fetch()

    return { post }
  },
  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
