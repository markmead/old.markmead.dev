<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
    <projects-card
      v-for="project of projects"
      :key="project.id"
      :slug="project.slug"
      :title="project.title"
      :branding="project.branding"
      :description="project.description"
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
