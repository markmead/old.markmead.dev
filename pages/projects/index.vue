<template>
  <div class="py-16 sm:py-32">
    <page-banner
      title="Featured Projects"
      text="I have built, deployed and maintained over 150 websites. Here's the few that I'm featuring."
    />

    <section>
      <div class="px-4 mx-auto mt-12 max-w-screen-2xl sm:px-6 lg:px-8">
        <projects-grid :projects="projects" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()

    return { projects }
  },
  head() {
    return {
      title: 'Development Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Featured projects that I have worked on.',
        },
      ],
    }
  },
}
</script>
