---
title: Clear Cart with Shopify API and Fetch
category: API
published: true
code: false
---

It's very easy to clear the cart with the Shopify API and Fetch.

```js
fetch('/cart/clear.js', {
  method: 'POST',
})
  .then((response) => {
    if (response.ok) {
    }
  })
  .catch((error) => console.error(error))
```

In the response, you may want to update parts of your UI to reflect the change to the cart.

<!--
This is a simple process using Alpine JS.

<nuxt-link to="alpine-clear-cart-shopify-api">
  Clearing the Cart and Updating the UI with Alpine JS
</nuxt-link> -->
