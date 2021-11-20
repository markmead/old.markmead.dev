<template>
  <div class="py-16 sm:py-32">
    <page-banner
      title="Featured Projects"
      text="I have built, deployed and maintained over 150 websites. Here's a few that I'm featuring."
    />

    <section>
      <div class="px-4 mx-auto mt-12 max-w-screen-2xl sm:px-6 lg:px-8">
        <projects-grid :projects="projects" />
      </div>
    </section>
  </div>
</template>

<script>
import { projects } from '@/lib/projects'

export default {
  computed: {
    projects() {
      return projects
    }
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
