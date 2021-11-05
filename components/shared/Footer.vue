<template>
  <footer>
    <div
      class="container flex items-center justify-center h-24 space-x-8 border-t border-black/10"
    >
      <shared-social-link
        v-for="social of socials"
        :key="social.id"
        :url="social.url"
        :platform="social.platform"
      />
    </div>
  </footer>
</template>

<script>
import { socials } from '~/assets/data/footer'

export default {
  computed: {
    socials() {
      return socials
    },
  },
}
</script>
