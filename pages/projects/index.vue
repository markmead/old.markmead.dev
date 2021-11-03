<template>
  <div class="py-16 sm:py-32">
    <section>
      <div class="container">
        <h1 class="font-serif text-5xl sm:text-8xl">
          Featured Projects
        </h1>

        <p
          class="mt-12 text-2xl font-medium leading-tight sm:text-5xl sm:leading-tight"
        >
          I have built, deployed and maintained over 150 websites. Here's the
          few that I'm featuring.
        </p>
      </div>
    </section>

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
    const projects = await $content("projects").fetch();

    return { projects };
  }
};
</script>
