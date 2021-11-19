<template>
  <div class="py-16 sm:py-32">
    <section>
      <div class="container">
        <h1 class="font-serif text-5xl sm:text-8xl">
          Code Snippets
        </h1>

        <p
          class="mt-12 text-2xl font-medium leading-tight sm:text-5xl sm:leading-tight"
        >
          These are quick reference points of code snippets that I have written or used in development projects.
        </p>
      </div>
    </section>

    <section>
      <div class="container mt-12">
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
