<template>
  <footer>
    <div
      class="flex items-center justify-center h-24 max-w-screen-xl px-4 mx-auto space-x-8 border-t border-black/5"
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
import { socials } from '@/lib/footer'

export default {
  computed: {
    socials() {
      return socials
    },
  },
}
</script>
