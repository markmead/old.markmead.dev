<template>
  <nav
    role="navigation"
    class="flex flex-col space-y-4 font-medium text-center sm:space-x-8 sm:flex-row sm:space-y-0"
  >
    <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
    <nuxt-link :to="{ name: 'blogs' }">Blogs</nuxt-link>
    <nuxt-link :to="{ name: 'shopify' }">Shopify</nuxt-link>
    <nuxt-link :to="{ name: 'snippets' }">Snippets</nuxt-link>
  </nav>
</template>
