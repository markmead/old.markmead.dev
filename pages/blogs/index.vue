<template>
  <div class="py-16 sm:py-32">
    <page-banner
      title="Development Blogs"
      text="Here are some short, to the point development blog posts as a learning and discovery resource."
    />

    <section>
      <div class="container mt-12">
        <post-grid :posts="posts" type="blogs-slug" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blogs')
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
