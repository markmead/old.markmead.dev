<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer"
    class="h-[300px] sm:h-[500px] rounded-lg p-8 flex items-center justify-center hover:shadow-xl transition"
    :class="css"
  >
    <div class="mx-auto text-center">
      <ul class="flex flex-wrap justify-center">
        <shared-tag
          v-for="tag of tags"
          :key="tag"
          :category="tag"
          class="m-1 bg-white"
        />
      </ul>

      <h2 class="mt-8 font-serif text-3xl sm:text-5xl" v-text="title" />

      <p class="mt-4 text-lg font-medium" v-text="subtitle" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    css: {
      type: String,
      required: true,
    },
  },
}
</script>
