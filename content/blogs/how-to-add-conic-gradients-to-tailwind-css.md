---
title: Adding Conic Gradients to Tailwind CSS
category: Tailwind CSS
published: true
---

I recently added conic gradients to [Hypercolor](https://hypercolor.dev/). Personally, I have no idea how to use conic gradients, but there's developers and designers out there that can do incredible things with them.

## What is a Conic Gradient?

From MDN:

> `conic-gradient()` CSS function creates an image consisting of a gradient with color transitions rotated around a center point

This is not something that's likely to be a default in Tailwind CSS so we need to add it ourselves.

Add the following to your `tailwind.config.js` file:

```js
backgroundImage: {
  'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
  'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
  'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
  'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
  'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
  'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
  'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
  'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
  'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
},
```

You can now use conic gradient classes in Tailwind CSS like this `bg-gradient-conic-bl from-fuchsia-300 via-green-400 to-rose-700`. Unsure on what you're doing? Use the [gradient generator on Hypercolor](https://hypercolor.dev/generator) to help get you started.
