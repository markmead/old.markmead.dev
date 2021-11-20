---
title: Alpine JS Money Directive
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

```html
<p x-money="price"></p>
```

Here's a blog post that dives into this deeper.

<nuxt-link to="/shopify/shopify-money-filter-alpine">
  Shopify Money Filter with an Alpine JS Directive
</nuxt-link>
