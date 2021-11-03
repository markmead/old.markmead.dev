<template>
  <article>
    <div class="container py-16 space-y-12 sm:py-32">
      <h1
        class="font-serif text-5xl text-center sm:text-8xl"
        v-text="project.title"
      />

      <!-- <nuxt-content class="mx-auto font-medium prose prose-lg sm:prose-2xl" :document="project" /> -->

      <div class="mx-auto prose prose-lg text-center sm:prose-2xl">
        <p>
          Content coming soon. In the meantime, you can
          <a :href="project.website" target="_blank" rel="noreferrer">
            view the website
          </a>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const { slug } = params;
    const project = await $content("projects", slug).fetch();

    return { project };
  }
};
</script>
