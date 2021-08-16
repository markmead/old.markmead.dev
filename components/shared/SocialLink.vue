<template>
  <a :href="url" :aria-label="label">
    <icons-git-hub class="w-8 h-8" v-if="platform === 'GitHub'" />
    <icons-twitter class="w-8 h-8" v-if="platform === 'Twitter'" />
    <icons-dribbble class="w-8 h-8" v-if="platform === 'Dribbble'" />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true
    }
  },
  computed: {
    label() {
      return `Mark Meads ${this.platform}`
    }
  }
}
</script>