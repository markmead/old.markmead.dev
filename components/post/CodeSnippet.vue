<template>
  <div>
    <p class="px-4 font-mono text-sm font-medium text-white/25">
      {{ comment }}
    </p>

    <div class="mt-4" v-html="html"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      required: true
    }
  },
  computed: {
    comment() {
      return `// ${this.title}`
    }
  }
}
</script>
