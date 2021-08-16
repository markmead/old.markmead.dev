<template>
  <nuxt-link
    :to="{ name: 'projects-slug', params: { slug: slug } }"
    class="h-[500px] rounded-lg p-8 flex items-center justify-center hover:shadow-xl transition"
    :class="branding"
  >
    <div class="mx-auto text-center">
      <h2 class="font-serif text-3xl sm:text-5xl" v-text="title" />

      <p class="max-w-sm mt-4 text-lg font-medium" v-text="description" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    branding: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
  }
}
</script>