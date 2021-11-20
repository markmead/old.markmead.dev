---
title: Tailwind CSS Direction Plugin
category: Tailwind CSS
published: true
code: false
---

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

// This is just to make the management of core plugins
// using the direction plugins easier to mange and read
let dirCore = ['backgroundColor', 'flexDirection']
let dirVariants = {}

dirCore.forEach((twCore) => {
  dirVariants[twCore] = ['rtl', 'ltr']
})

module.exports = {
  variants: {
    extend: {
      ...dirVariants,
    },
  },
  plugins: [rtlPlugin, ltrPlugin],
}
```

```html
<div dir="rtl">
  <p class="rtl:bg-blue-200 inline-flex space-x-2 rtl:flex-row-reverse">
    <span> Hello World! </span>

    <span role="img"> 👋 </span>
  </p>
</div>

<div dir="ltr">
  <p class="ltr:bg-green-200 inline-flex space-x-2">
    <span> Hello World! </span>

    <span role="img"> 👋 </span>
  </p>
</div>
```
