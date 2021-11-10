---
title: Add Product to Cart with Shopify API and Fetch
category: API
published: true
---

```js
let cartData = { id: variantId, quantity: 1 }

fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cartData),
})
  .then((response) => {
    if (response.ok) {
      // fetch the cart again?
      // show success message?
      // popup mini cart?
      // update cart count in the header?
    }
  })
  .catch((error) => console.error(error))
```
