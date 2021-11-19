<template>
  <header class="sticky inset-x-0 top-0 z-10 bg-rose-50">
    <div class="container flex items-center justify-between h-16">
      <nuxt-link
        :to="{ name: 'index' }"
        class="text-xl font-bold tracking-tighter"
      >
        Mark Mead
      </nuxt-link>

      <shared-navigation class="hidden sm:block" />

      <div class="relative sm:hidden">
        <button
          type="button"
          @click="open = !open"
          class="font-medium"
        >
          Menu
        </button>

        <div
          class="absolute right-0 max-w-xs p-8 mt-4 shadow-xl bg-red-50 top-full rounded-xl"
          v-if="open"
        >
          <shared-navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  watch: {
    $route () {
      this.open = false
    }
  }
}
</script>
