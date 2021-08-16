<template>
  <nuxt-link :to="{ name }" class="underline" v-text="text" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>