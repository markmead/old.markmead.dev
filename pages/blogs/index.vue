<template>
  <div class="py-16 sm:py-32">
    <section>
      <div class="container">
        <h1 class="font-serif text-5xl sm:text-8xl">
          Development Blogs
        </h1>

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
        <blogs-grid :blogs="blogs" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blogs')
      .where({ published: true })
      .sortBy('title')
      .fetch()

    return { blogs }
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
