---
title: Creating a JavaScript Function to Add to Cart
category: JavaScript
published: true
code: false
---

Here we are creating an add to cart function that accepts an `id` and a `quantity` which we will pass on form submit.

```js
function addToCart(variantId, quantity = 1) {
  let cartData = { id: variantId, quantity: quantity }

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
}
```

Here's a faked product form in Shopify that we will base our work on:

```html
<form>
  <div>
    <label for="quantity"> Quantity </label>

    <input type="number" id="quantity" name="quantity" />
  </div>

  <button
    type="submit"
    id="submit"
    data-variant-id="{{ product.selected_or_first_available_variant.id }}"
  >
    Add to Cart
  </button>
</form>
```

You can then write the following JavaScript to grab the data needed and then pass it through to the function on form submit.

It's possible and probably better to listen to the form submit, but this seems to be the more common approach.

```js
let quantityInput = document.getElementyById('quantity')
let submitButton = document.getElementById('submit')

let variantId = submitButton.getAttribute('data-variant-id')
let quantity = quantityInput.value

submitButton.addEventListener('click', (event) => {
  event.preventDefault()

  addToCart(variantId, quantity)
})
```

This will grab all the information needed from the form and pass that to the `addToCart` function.

It also triggers `event.preventDefault()` so the form doesn't submit as we are using `type="submit"` on the button. The reason for this is so that with JavaScript disabled the product form will still work.

You can do this in a cleaner way with the Alpine JS store:

<nuxt-link to="alpine-add-to-cart-shopify-api">
  Using the Alpine JS to Add to Cart with Shopify API
</nuxt-link>
