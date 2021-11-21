<template>
  <section>
    <div class="max-w-screen-xl px-4 mx-auto">
      <h1 class="font-serif text-5xl sm:text-7xl" v-text="title" />

      <p
        class="max-w-5xl mt-12 text-2xl font-medium sm:text-4xl"
        v-text="text"
      />
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
