---
title: Popout Shadow with the Tailwind CSS JIT (v2.2)
category: Tailwind CSS
published: true
code: false
---

There's a trend of popout shadow effects sweeping the internet, this has always required some extra HTML elements when creating this with Tailwind CSS.

However, thanks to the new Tailwind CSS v2.2 update you can do this without the added elements, this is all thanks to the new `before` and `after` variants possible with Tailwind CSS JIT.

## Popout Shadow Effect with Tailwind CSS (Pre v2.2 Update)

```html
<a class="relative inline-block group" href="">
  <span
    class="absolute inset-0 transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span class="relative inline-block px-8 py-3 bg-white border-2 border-black">
    Click me!
  </span>
</a>
```

**What's the problem with this?**

1. There are two `<span>` HTML elements being used making the markup cluttered
2. The offset shadow created isn't accurate (example shown at the end)

## Popout Shadow Effect with Tailwind CSS (v2.2 Update)

```html
<a
  class="relative inline-block px-8 py-3 bg-white border-2 border-black after:absolute after:inset-0 after:translate-x-1 after:translate-y-1 after:bg-black after:-z-1 hover:after:translate-x-0 hover:after:translate-y-0"
  href=""
>
  Click me!
</a>
```

It's better, but with an obvious problem... I don't think I need to explain what that problem is 😅

I had to do add an additional line to the `tailwind.config.js`:

```js
zIndex: {
  '-1': '-1',
},
```

It's a small addition for cleaner HTML markup.

**Issues with the Offset Shadow**

Take a look at [this example created with SCSS](https://codepen.io/markmead/pen/gOmErLy) in CodePen.

The new Tailwind CSS example and the SCSS example match, however the old Tailwind CSS way does not. Little weird, but could probably be fixed by adding `inline-block` to the first `<span>`.
