<template v-if="post.code">
  <div>
    <code-button
      @toggle="$emit('toggle')"
      :show="show"
    />

    <div
      v-show="show"
      class="fixed inset-0 z-40 overflow-y-scroll bg-[#282c34]"
    >
      <div class="flex items-center justify-center">
        <div class="w-screen max-w-3xl p-4 space-y-8">
          <div
            v-for="{ title, __html } of examples"
            :key="title"
            class="p-4 border-2 rounded-lg border-white/10"
          >
            <code-snippet :title="title" :html="__html" />
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
      default: false
    }
  }
}
</script>
