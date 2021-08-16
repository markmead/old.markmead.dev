<template>
  <span v-text="seconds" />
</template>

<script>
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

export default {
  props: {
    time: {
      type: String,
      required: true
    }
  },
  computed: {
    seconds() {
      const end = dayjs(new Date())
      const start = dayjs(this.time)

      return end.diff(start, 's')
    }
  }
}
</script>