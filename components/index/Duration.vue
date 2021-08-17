<template>
  <span v-text="seconds" />
</template>

<script>
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(customParseFormat)
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
      const end = dayjs()
      const start = dayjs(this.time, "DD-MM-YYYY")

      return end.diff(start, 's')
    }
  }
}
</script>