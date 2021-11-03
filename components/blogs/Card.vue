<template>
  <nuxt-link
    :to="{ name: 'blogs-slug', params: { slug: slug } }"
    class="block px-8 pt-24 pb-8 text-red-900 transition bg-red-100 rounded-lg hover:bg-red-50 hover:shadow-sm"
  >
    <p class="text-sm font-medium" v-text="category" />

    <h2 class="mt-4 text-xl font-medium sm:text-2xl" v-text="title" />
  </nuxt-link>
</template>

<script>
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
  },
}
</script>
