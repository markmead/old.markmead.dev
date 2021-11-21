<template>
  <post-content
    :post="post"
    :related="related"
    type="blogs-slug"
  />
</template>

<script>
import { shuffle } from 'lodash'

export default {
  async asyncData({ $content, params }) {
    let { slug } = params
    let post = await $content('snippets', slug).fetch()
    let related = await $content('snippets')
      .where({ category: post.category })
      .sortBy('title')
      .fetch()

    related = shuffle(related).slice(0, 1)

    return { post, related }
  },
  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
