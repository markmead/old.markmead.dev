<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto lg:py-32">
    <page-banner
      title="Code Snippets"
      text="These are quick reference points of code snippets that I have written or used in development projects."
    />

    <section class="mt-12">
      <post-grid :posts="posts" type="snippets-slug" />
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
      title: 'Code Snippets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Code snippets for quick reference in development.',
        },
      ],
    }
  },
}
</script>
