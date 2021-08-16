<template>
  <a :href="url" target="_blank" rel="noreferrer" class="underline" v-text="text" />
</template>

<script>
export default {
  props: {
    url: {
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