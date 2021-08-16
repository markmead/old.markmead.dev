<template>
  <nuxt-link
    :to="{ name: 'blogs-slug', params: { slug: slug } }"
    :class="colors"
    class="px-8 pt-24 pb-8 text-white transition rounded-lg hover:shadow-xl"
  >
    <p class="text-sm font-medium" v-text="category" />

    <h2 class="mt-4 font-serif text-xl" v-text="title" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
  },
  computed: {
    colors() {
      if(this.category === 'Tailwind CSS') {
        return 'bg-teal-500 hover:bg-teal-600'
      } else if(this.category === 'Rails') {
        return 'bg-red-500 hover:bg-red-600'
      } else if(this.category === 'Vue') {
        return 'bg-green-500 hover:bg-green-600'
      } else {
        return 'bg-purple-500 hover:bg-purple-700'
      }
    }
  }
}
</script>