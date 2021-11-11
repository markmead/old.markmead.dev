---
title: Clear Cart with Shopify API and Fetch
category: API
published: true
---

```js
fetch('/cart/clear.js', {
  method: 'POST',
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
