<template>
  <article>
    <div class="container py-16 sm:py-32 space-y-12">
      <h1 class="font-serif text-5xl sm:text-8xl text-center" v-text="blog.title" />

      <nuxt-content class="prose prose-2xl font-medium mx-auto" :document="blog" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { slug } = params
    const blog = await $content('blogs', slug).fetch()

    return { blog }
  }
}
</script>