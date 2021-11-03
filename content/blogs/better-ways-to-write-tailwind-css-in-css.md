---
title: Better Ways to Write Tailwind CSS in CSS
category: Tailwind CSS
published: true
---

There may come a point when you're using Tailwind CSS that you need to write CSS. This is rare, especially since [Tailwind CSS JIT mode](https://tailwindcss.com/docs/just-in-time-mode) came out, allowing you to write Tailwind CSS classes that don't exist, but are created on build.

There's a few approaches to writting CSS in Tailwind CSS:

1. Write custom CSS
2. Write Tailwind CSS classes with `theme()`
3. Write Tailwind CSS classes with `@apply`

I'm not a fan of `theme()` I think it looks messy in CSS files, so I will typically reach for `@apply` and then write custom CSS when needed.

Here's an example of creating a `.button` class in Tailwind CSS that sets up a default style, this is a common use case of writing CSS with Tailwind CSS.

**`theme()`**

```css
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: theme('spacing.3') theme('spacing.6');
  font-size: theme('fontSize.sm');
  font-weight: theme('fontWeight.semibold');
  letter-spacing: theme('letterSpacing.wider');
  text-transform: uppercase;
  border-radius: theme('borderRadius.lg');
}
```

**`@apply`**

```css
.button {
  @apply inline-flex justify-center items-center px-6 py-3 text-sm font-semibold tracking-wider uppercase rounded-lg;
}
```

There's pros and cons to both of these approaches:

**`theme()`**

- Doesn't keep a clear split between Tailwind CSS and CSS 👎
- Slower to write 👎
- Looks more like traditional CSS 👍
- Uses CSS values instead of Tailwind CSS classes (👍 for onboarding developers)

**`@apply`**

- Can become very long 👎
- Not loved by the Tailwind CSS developers (👎 if they decide to stop supporting it)
- Keeps a clear split between Tailwind CSS and CSS 👍
- Fast to write 👍
- Uses Tailwind CSS classes (👍 for Tailwind CSS lovers)

I believe that the benefits of `@apply` outweigh the issues, especially when the biggest issue has multiple solutions.

## How to Write Better Tailwind CSS in CSS

I've found two approaches that solve the issue of "Can become very long" when using `@apply`:

### Multiple Lines

```css
.button {
  @apply inline-flex justify-center items-center;
  @apply px-6 py-3;
  @apply text-sm font-semibold tracking-wider uppercase;
  @apply rounded-lg;
}
```

This has full support and when written correctly will help you read and write Tailwind CSS in CSS faster.

### Stacking CSS

```css
.button {
  @apply inline-flex justify-center items-center
    px-6 py-3
    text-sm font-semibold tracking-wider uppercase
    rounded-lg;
}
```

This approach looks messy and CSS formatters will break it.

### How to Order CSS in Tailwind CSS

There's a simple approach I take when writting CSS with Tailwind CSS, it's all in the order of the `@apply` use:

1. **Display** `inline-flex justify-center items-center`
2. **Spacing** `px-6 py-3`
3. **Font** `text-sm font-semibold tracking-wider uppercase`
4. **Style** `rounded-lg`
5. **Transition** `transition-shadow`
6. **State** `hover:shadow-xl focus:ring-2`
7. **Other/Custom** `background-image: url('...')`

Write your Tailwind CSS like that in CSS files and you'll be fast and the code you write will be readable.
