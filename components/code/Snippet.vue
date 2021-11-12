<template>
  <div>
    <p
      v-text="comment"
      class="px-4 font-mono text-sm font-medium text-white/25"
    >

    <div
      v-html="html"
      class="mt-4"
    >
    </div>
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
