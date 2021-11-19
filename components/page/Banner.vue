<template>
  <section>
    <div class="container">
      <h1 class="font-serif text-5xl sm:text-7xl" v-text="title" />

      <p
        class="mt-12 text-2xl font-medium leading-tight sm:text-5xl sm:leading-tight"
        v-text="text"
      >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
