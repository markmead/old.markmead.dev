<template>
  <button
    @click="$emit('toggle')"
    type="button"
    class="fixed z-50 w-32 py-3 text-sm font-medium text-white bg-black rounded-lg shadow-xl bottom-6 right-6"
  >
    <template v-if="show">
      <span role="img">
        📖
      </span>

      <span class="font-medium ml-1.5">
        Show Notes
      </span>
    </template>

    <template v-else>
      <span role="img">
        👀
      </span>

      <span class="font-medium ml-1.5">
        Show Code
      </span>
    </template>
  </button>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
