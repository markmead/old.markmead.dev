<template>
  <nuxt-link
    :to="{ name: type, params: { slug: slug } }"
    class="relative block px-8 pt-24 pb-8 overflow-hidden transition rounded-lg bg-rose-100/50 hover:scale-105"
  >
    <p class="text-sm font-medium" v-text="category" />

    <h2 class="mt-4 text-xl font-medium sm:text-2xl" v-text="title" />

    <span class="absolute inset-x-0 bottom-0 h-1" :class="color"></span>
  </nuxt-link>
</template>

<script>
import { colors } from '@/utils/colors'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    color() {
      return colors[this.category]
    },
  },
}
</script>
