<template>
  <p class="inline-flex items-center px-3 py-1.5 rounded-lg text-gray-900 text-sm">
    <span role="img" v-text="emoji"></span>

    <span class="font-medium ml-1.5" v-text="category"></span>
  </p>
</template>

<script>
import { code } from '@/utils/code'

export default {
  props: {
    category: {
      type: String,
      required: true,
    }
  },
  computed: {
    emoji() {
      return code[this.category].emoji
    },
  }
}
</script>
