---
title: Alpine JS JSON Directive
category: Alpine
published: true
code: false
---

```js
Alpine.directive('json', (el, { expression }, { evaluateLater, effect }) => {
  let getValue = evaluateLater(expression)
  effect(() => {
    getValue((value) => {
      el.innerText = JSON.stringify(value)
    })
  })
})
```

```html
<p x-json="variant"></p>
```
