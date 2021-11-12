<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <post-card
      v-for="post of posts"
      :title="post.title"
      :category="post.category"
      :slug="post.slug"
      :key="post.id"
      :code="post.code"
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
