---
title: Add Product to Cart with Shopify API and Fetch
category: API
published: true
code: false
---

Here's a code snippet showing how to add to cart via the REST API and Fetch.

```js
let cartData = { id: variantId, quantity: 1 }

fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cartData),
})
  .then((response) => {
    if (response.ok) {
    }
  })
  .catch((error) => console.error(error))
```

The two values in the `cartData` object will need to be dynamic. This can be done in a number of ways:

<nuxt-link to="javascript-add-to-cart-shopify-api">
  Creating a JavaScript Function to Add to Cart
</nuxt-link>

<br >

<nuxt-link to="alpine-add-to-cart-shopify-api">
  Using the Alpine JS to Add to Cart with Shopify API
</nuxt-link>

I have a preference for the Alpine JS approach, but both work well.
