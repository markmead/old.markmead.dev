<template>
  <nav
    role="navigation"
    class="flex flex-col items-center space-y-4 text-center sm:flex-row sm:space-x-4 sm:space-y-0"
  >
    <shared-navigation-link
      v-for="{ url, text, emoji } of links"
      :key="url"
      :text="text"
      :emoji="emoji"
      :url="url"
    />
  </nav>
</template>

<script>
import { links } from '@/lib/navigation'

export default {
  computed: {
    links() {
      return links
    }
  }
}
</script>
