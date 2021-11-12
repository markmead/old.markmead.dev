---
title: Shopify Money Filter with an Alpine JS Directive
category: Alpine
published: true
code: false
---

```js
Alpine.directive('money', (el, { expression }, { evaluateLater, effect }) => {
  let getValue = evaluateLater(expression)

  effect(() => {
    getValue((value) => {
      let money = value / 100
      let formattedPrice = Intl.NumberFormat(Shopify.locale, {
        style: 'currency',
        currency: Shopify.currency.active,
      }).format(money)

      el.innerText = formattedPrice
    })
  })
})
```
