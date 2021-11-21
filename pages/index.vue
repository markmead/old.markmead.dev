<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto lg:py-32">
    <shared-article :title="page.title" :content="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages', 'index').fetch()

    return { page }
  },
  head() {
    return {
      title: 'Shopify Developer in the UK',
    }
  },
}
</script>
