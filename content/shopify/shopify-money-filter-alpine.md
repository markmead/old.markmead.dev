---
title: Shopify Money Filter with an Alpine JS Directive
category: Alpine
published: true
code: true
---

If you're working with the Shopify API and Alpine JS then there might be times you write some HTML like this:

```html
<p x-text="$store.variant.selected.price"></p>
```

This is getting the `variant` store from Alpine JS and returning the `price` of the `selected` object.

For reference, the store might look something like this:

```js[Setup Alpine JS store to control current variant (assets/theme.js)]
Alpine.store('variant', {
  selected: null,
})
```

When using the Alpine JS directive `x-text` you can no longer use the Liquid filters like `price | money` or `price | money_with_currency` which is a shame as they provide an easy to use and read way of using the currency in Shopify.

We can replicate this in Alpine JS with a custom directive:

```js[Create an Alpine JS directive to convert price into currency based on Shopify data (assets/theme.js)]
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

Which we can then use like so:

```html
<p x-money="$store.variant.selected.price"></p>
```

What this will do is pass the value of `$store.variant.selected.price` to our new Alpine JS directive where it will:

- Divides the value by 100 (Shopify stores price as an integer, we need a decimal)
- Parse the value into international money formatted using the Shopify stores locale and currency
- Sets the text of the element to this newly formatted price
