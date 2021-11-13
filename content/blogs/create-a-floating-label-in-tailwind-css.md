---
title: Create a Floating Label in Tailwind CSS
category: Tailwind CSS
published: false
code: true
---

Before the Tailwind CSS 2.2 update that enhanced Tailwind CSS JIT there wasn't a Tailwind CSS only solution to creating a floating label, I'd typically reach for Alpine JS and a custom plugin for Tailwind CSS.

As Tailwind CSS JIT isn't the go to for most users, I'll be showing both ways to create a Tailwind CSS floating label.

## Floating Label with Tailwind CSS (Pre v2.2 Update)

The first piece of the puzzle is to add a new plugin to Tailwind CSS that allows you to target the sibling element.

Thankfully, [this Stack Overflow answer](https://stackoverflow.com/a/65321069) has the solution that we need.

```js[Adding a focused sibling variant to Tailwind CSS (tailwind.config.js)]
const plugin = require('tailwindcss/plugin')

const focusedSiblingPlugin = plugin(function({ addVariant, e }) {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules(rule => {
      rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`
    })
  })
})

module.exports = {
  variants: {
    extend: {
      translate: ['focused-sibling', 'not-empty-sibling'],
    },
  },
  plugins: [focusedSiblingPlugin],
}
```

Next, we need a way to check if the `<input>` value is empty or not. For this, we can add another custom plugin.

```js[Adding a variant for when the input is not empty to Tailwind CSS (tailwind.config.js)]
const notEmptySiblingPlugin = plugin(function({ addVariant }) {
  addVariant('not-empty-sibling', ({ container }) => {
    container.walkRules(rule => {
      rule.selector = `:not(:placeholder-shown) + .not-empty-sibling\\:${rule.selector.slice(
        1
      )}`
    })
  })
})
```

All this together allows you to write the following HTML to create a floating label.

```html[Floating label with Tailwind CSS example]
<div class="relative">
  <input type="text" id="name" placeholder="Name" />

  <label
    for="name"
    class="absolute transition-transform transform -translate-y-1/2 not-empty-sibling:-translate-y-12 focused-sibling:-translate-y-12 top-1/2 left-2"
  >
    Name
  </label>
</div>
```

This works but sadly, `:placeholder-shown` is [not fully supported](https://caniuse.com/?search=placeholder-shown).

There's another issue as this requires the `<input>` to have a placeholder, even if you aren't using one. There is the option to make the placeholder transparent with the Tailwind CSS class `placeholder-transparent`.

If you're not a fan of this approach then I'd recommend combining the first plugin `focusedSibling` and JavaScript. I'd advise using Apline JS for this.

```html[Floating label with Tailwind CSS and Alpine JS example]
<div class="relative" x-data="{ name: '' }">
  <input type="text" id="name" x-model="name" />

  <label
    for="name"
    class="absolute transition-transform transform focused-sibling:-translate-y-12 top-1/2 left-2"
    :class="{ '-translate-y-12': name, '-translate-y-1/2': !name }"
  >
    Name
  </label>
</div>
```
