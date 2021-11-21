<template>
  <article class="space-y-12">
    <h1 class="font-serif text-5xl sm:text-7xl" v-text="title" />

    <nuxt-content
      :document="content"
      class="font-medium prose prose-lg sm:prose-2xl"
    />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
