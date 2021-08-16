<template>
  <footer>
    <div class="container flex justify-center h-24 items-center border-t border-black/10 space-x-8">
      <shared-social-link v-for="social of socials" :key="social.id" :url="social.url" :platform="social.platform" />
    </div>
  </footer>
</template>

<script>
import { socials } from '~/assets/data/footer'

export default {
  computed: {
    socials() {
      return socials
    }
  }
}
</script>