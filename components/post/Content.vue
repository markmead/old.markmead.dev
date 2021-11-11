<template>
  <article>
    <div class="container py-16 space-y-12 sm:py-32">
      <h1
        class="font-serif text-5xl text-center sm:text-8xl"
        v-text="post.title"
      />

      <nuxt-content
        class="max-w-4xl mx-auto font-medium prose prose-lg sm:prose-2xl"
        :document="post"
      />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>
