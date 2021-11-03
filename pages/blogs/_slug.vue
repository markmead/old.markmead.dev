<template>
  <article>
    <div class="container py-16 space-y-12 sm:py-32">
      <h1
        class="font-serif text-5xl text-center sm:text-8xl"
        v-text="blog.title"
      />

      <nuxt-content
        class="mx-auto font-medium prose prose-lg sm:prose-2xl"
        :document="blog"
      />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { slug } = params;
    const blog = await $content("blogs", slug).fetch();

    return { blog };
  }
};
</script>
