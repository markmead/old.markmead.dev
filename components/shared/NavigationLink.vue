<template>
  <nuxt-link
    :to="{ name: url }"
    class="inline-flex items-center px-3 py-1.5 rounded-lg bg-red-100 text-sm hover:bg-red-100/50 transition"
  >
    <span role="img" v-text="emoji"></span>

    <span class="font-medium ml-1.5" v-text="text"></span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      required: true
    }
  }
}
</script>
