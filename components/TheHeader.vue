<template>
  <header class="bg-midnight text-pewter">
    <div class="container mx-auto px-5 py-5">
      <nuxt-link
        class="inline-block"
        to="/"
      >
      <nuxt-img
          class="block mt-2 h-10"
          src="/brand-logo.png"
          alt="Becoming Boston"
          sizes="sm:500px"
        />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
