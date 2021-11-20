<template>
  <article
    class="text-3xl font-medium leading-tight sm:text-5xl sm:leading-tight"
  >
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-12 sm:py-32">
      <h1 class="font-serif text-5xl sm:text-7xl" v-text="title" />

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
