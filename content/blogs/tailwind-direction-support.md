---
title: Direction Support in Tailwind CSS without JIT
category: Tailwind CSS
published: true
code: false
---

If you aren't using Tailwind CSS JIT and you need direction support then you might be reaching for a Tailwind CSS plugin.

This doesn't have to be an external plugin.

```js
let plugin = require('tailwindcss/plugin')

let rtlPlugin = plugin(function ({ addVariant, e }) {
  addVariant('rtl', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `[dir="rtl"] .rtl\\:${rule.selector.slice(1)}`
    })
  })
})

let ltrPlugin = plugin(function ({ addVariant, e }) {
  addVariant('ltr', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `[dir="ltr"] .ltr\\:${rule.selector.slice(1)}`
    })
  })
})

module.exports = {
  variants: {
    extend: {
      backgroundColor: ['rtl', 'ltr'],
      flexDirection: ['rtl', 'ltr']
    },
  },
  plugins: [rtlPlugin, ltrPlugin],
}
```

And then you can write HTML like this:

```html
<div dir="rtl">
  <p class="rtl:bg-blue-500">
    Hello World
  </p>
</div>

<div dir="ltr">
  <p class="ltr:bg-blue-500">
    Hello World
  </p>
</div>
```

This works exactly the same as the Tailwind CSS JIT version so when you finally move over it will work without issue.