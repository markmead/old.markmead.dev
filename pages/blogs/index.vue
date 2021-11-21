<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto lg:py-32">
    <page-banner
      title="Development Blogs"
      text="Here are some short, to the point development blog posts as a learning and discovery resource."
    />

    <section class="mt-12">
      <post-grid :posts="posts" type="blogs-slug" />
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
