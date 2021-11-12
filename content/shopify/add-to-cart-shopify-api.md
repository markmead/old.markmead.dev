---
title: Add Product to Cart with Shopify API and Fetch
category: API
published: true
code: true
---

Here's a code snippet showing how to add to cart via the REST API and Fetch.

```js[Add to cart with Shopify API and Fetch]
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

The two values in the `cartData` object will need to be dynamic. This can be done a number of ways:

[Creating a JavaScript Function to Add to Cart](/shopify/javascript-add-to-cart-shopify-api)

[Using the Alpine JS Store to Manage Add to Cart](/shopify/alpine-add-to-cart-shopify-api)

I have preference towards the Alpine JS approach, but both work well.
