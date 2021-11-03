---
title: Adding Radial Gradients to Tailwind CSS
categories: ["Tailwind CSS", "CSS", "Frontend", "Gradients"]
published: true
---

Recently, I added radial gradient classes to [Hypercolor](https://hypercolor.dev/). This is currently not something Tailwind CSS supports and it's unlikely it ever will.

However, to add radial gradient classes into Tailwind CSS is very easy so don't worry.

Simply add the following to your `tailwind.config.js` file:

```js
backgroundImage: {
  'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
  'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
  'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
  'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
  'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
  'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
  'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
  'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
  'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
},
```

This will allow you to write classes like `bg-gradient-radial-at-l from-fuchsia-300 via-green-400 to-rose-700`, it's hard to tell if that would look awful or amazing, so I recommend using the [gradient generator on Hypercolor](https://hypercolor.dev/generator) to see what works and what doesn't.
