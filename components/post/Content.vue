<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto lg:py-32">
    <code-section
      v-if="post.code"
      :examples="examples"
      :show="show"
      @toggle="show = !show"
      @close="show = false"
    />

    <div class="grid grid-cols-1 gap-y-8 gap-x-16 lg:grid-cols-3 lg:items-start">
      <div class="lg:col-span-2">
        <shared-article :title="post.title" :content="post" />
      </div>

      <aside class="grid grid-cols-1 gap-8 lg:sticky sm:grid-cols-2 lg:grid-cols-1 lg:top-32">
        <post-card
          v-for="{ title, category, slug } of related"
          :title="title"
          :category="category"
          :slug="slug"
          :key="slug"
          :type="type"
        />
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    related: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      examples: [],
      show: false,
    }
  },
  mounted() {
    if (!this.post.code) return

    let elements = document.querySelectorAll('.nuxt-content-highlight')

    elements.forEach(element => {
      let title = element.querySelector('.filename')?.innerText

      this.examples.push({
        title,
        __html: element.innerHTML,
      })
    })
  }
}
</script>

<style>
.filename {
  display: none;
}
</style>
