---
title: Async Await Shopify Cart
category: JavaScript
published: true
code: false
---

```js
async function getCart() {
  let { response } = await fetch('/cart.js')
  let { data } = response
}

async function addToCart() {
  let cartData = { id: variant.id, quantity: 1 }

  let { response } = await fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cartData),
  })

  response.ok && getCart()
}

async function removeFromCart() {
  let cartData = { line: index, quantity: 0 }

  let { response } = await fetch('/cart/change.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cartData),
  })

  response.ok && getCart()
}
```
