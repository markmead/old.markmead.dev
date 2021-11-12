<template v-if="post.code">
  <div>
    <button
      type="button"
      class="fixed z-50 w-32 text-white bg-black shadow-xl bottom-6 right-6 button"
      @click="$emit('toggle')"
    >
      {{ show ? 'Hide' : 'Show' }} Code
    </button>

    <div
      v-show="show"
      class="fixed inset-0 z-40 overflow-y-scroll bg-[#282c34]"
    >
      <div class="flex items-center justify-center p-8">
        <div class="w-screen max-w-3xl space-y-8">
          <div
            v-for="{ title, __html } of examples"
            :key="title"
            class="p-4 border-2 border-white rounded-lg"
          >
            <post-code-snippet :title="title" :html="__html" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    examples: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      defalt: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.button {
  @apply text-sm font-medium py-3 px-4 rounded-lg;
}
</style>
