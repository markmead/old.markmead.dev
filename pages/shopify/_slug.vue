<template>
  <post-content
    :post="post"
    :related="related"
    type="shopify-slug"
  />
</template>

<script>
import { shuffle } from 'lodash'

export default {
  async asyncData({ $content, params }) {
    let { slug } = params
    let post = await $content('shopify', slug).fetch()
    let related = await $content('shopify')
      .where({ category: post.category })
      .sortBy('title')
      .fetch()

    related = shuffle(related).slice(0, 2)

    return { post, related }
  },
  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
