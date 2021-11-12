---
title: How to Write Better Tailwind CSS Containers
category: Tailwind CSS
published: true
---

When it comes to Tailwind CSS containers, a lot of people will write `max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`

Or something similar. In fact, this website uses the classes above but instead of writing that every time, instead I write `container`.

As you can see, this is much cleaner and it will keep your HTML uncluttered.

You could argue it's less "declarative" but Bootstrap has been using `container` for years and there have never been any issues. Also, if you're that worried, don't - the explanation to how `container` works in Tailwind CSS can be found in the `tailwind.config.js`.

A typical Tailwind CSS config will have the following:

```js[Empty Tailwind CSS config the theme object]
theme: {
  extend: {}
}
```

Here you can override Tailwind CSS classes or extend them.

To update this to make `container` perform how we want, we will override the class with the following:

```[Extended Tailwind CSS config that sets up the container class]
theme: {
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      sm: "1.5rem",
      lg: "2rem"
    }
  },
  extend: {}
}
```

What this is doing is taking the old `container` class from Tailwind CSS that only did `max-w-screen-xl` and replacing it with `max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8` but we only need to write a single class name.

You can adjust the padding for each screen size that's available in Tailwind CSS.

If you opt into using a single padding class then don't write it as an object, simply do `padding: "1rem"`.

Read up on the Tailwind CSS container class on the official docs page - [Tailwind CSS - Container](https://tailwindcss.com/docs/container)
