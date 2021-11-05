<template>
  <article
    class="text-2xl font-medium leading-tight sm:text-5xl sm:leading-tight"
  >
    <div class="container py-16 space-y-12 sm:py-32">
      <h1 class="font-serif text-5xl sm:text-8xl" v-text="title" />

      <slot />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
