<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
    <projects-card
      v-for="{ url, title, subtitle, tags, css } of projects"
      :key="url"
      :url="url"
      :title="title"
      :subtitle="subtitle"
      :css="css"
      :tags="tags"
    />
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
