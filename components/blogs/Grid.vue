<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
    <blogs-card
      v-for="blog of blogs"
      :title="blog.title"
      :category="blog.category"
      :slug="blog.slug"
      :key="blog.id"
    />
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>