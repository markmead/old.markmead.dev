---
title: Direction Support in Tailwind CSS with JIT
category: Tailwind CSS
published: true
code: false
---

It turns out that Tailwind CSS has had direction support since the release of the JIT mode.

This feature hasn't been spoken about as the creator of Tailwind CSS, Adam Wathan has said this:

> Experimental so haven't documented it (just because I've never built an RTL site so don't want to be locked in to the implementation if I f*ed it up) but yeah, been there since JIT was first introduced.

This is a great feature to have in Tailwind CSS. I've worked on a few websites that needed RTL support and in the past I've reached for a Tailwind CSS plugin, but now we don't need too.

All you need to do is enable JIT like so:

```js
module.exports = {
  mode: 'jit'
  ...
}
```

And then you can start using classes like `ltr` and `rtl` like so:

```html
<div dir="rtl">
  <p class="rtl:bg-blue-500">
    Hello World
  </p>
</div>

<div dir="ltr">
  <p class="ltr:bg-blue-500">
    Hello World
  </p>
</div>
```

It's up to you where you place the `dir=""`. It can be easiest to place it on the `html` tag as that wraps the whole site and will do a lot of the `rtl` or `ltr` support for you.