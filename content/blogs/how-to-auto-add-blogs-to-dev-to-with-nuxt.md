---
title: How to Auto Add Your Blogs to DEV.to with Nuxt
category: Vue
published: false
---

I adore DEV.to

It's an amazing platform that lets developers all around the world share knowledge and ideas

The problem with DEV.to is you want traffic hitting your personal site but it's no fun copying and pasting a blog to DEV.to from your personal site

We can automate this with an RSS feed which we can implement with the `@nuxtjs/feed` module

Doing this we can pass DEV.to the RSS feed URL and it will import all the blogs from your website into DEV.to as a DRAFT post

Then you can edit and publish

This also auto adds the "originaly published on yourwebsite.com" at the top and you can even set the URL of the blog on YOUR website as the canonical... This means something in SEO land

So how to do it...
