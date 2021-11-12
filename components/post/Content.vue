<template>
  <div>
    <post-code
      :examples="examples"
      :show="show"
      @toggle="show = !show"
      @close="show = false"
    />

    <article>
      <div class="container py-16 space-y-12 sm:py-32">
        <h1
          class="font-serif text-5xl text-center sm:text-8xl"
          v-text="post.title"
        />

        <nuxt-content
          class="max-w-4xl mx-auto font-medium prose prose-lg sm:prose-2xl"
          :document="post"
        />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      examples: [],
      show: false,
    }
  },
  mounted() {
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
