<template>
  <header class="sticky inset-x-0 top-0 z-10 bg-rose-50">
    <div class="container flex items-center justify-between h-16">
      <nuxt-link
        :to="{ name: 'index' }"
        class="text-xl font-bold tracking-tighter"
      >
        Mark Mead
      </nuxt-link>

      <nav role="navigation" class="flex space-x-4 font-medium sm:space-x-8">
        <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
        <nuxt-link :to="{ name: 'blogs' }">Blogs</nuxt-link>
        <nuxt-link :to="{ name: 'shopify' }">Shopify</nuxt-link>
      </nav>
    </div>
  </header>
</template>
