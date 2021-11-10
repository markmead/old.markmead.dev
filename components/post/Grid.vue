<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <post-card
      v-for="blog of posts"
      :title="blog.title"
      :category="blog.category"
      :slug="blog.slug"
      :key="blog.id"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>
