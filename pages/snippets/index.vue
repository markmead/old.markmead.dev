<template>
  <div class="py-16 sm:py-32">
    <page-banner
      title="Code Snippets"
      text="These are quick reference points of code snippets that I have written or used in development projects."
    />

    <section>
      <div class="max-w-screen-xl px-4 mx-auto mt-12">
        <post-grid :posts="posts" type="snippets-slug" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('snippets')
      .where({ published: true })
      .sortBy('title')
      .fetch()

    return { posts }
  },
  head() {
    return {
      title: 'Development Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Short, informative blog posts for developers.',
        },
      ],
    }
  },
}
</script>
