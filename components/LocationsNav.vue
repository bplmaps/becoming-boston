<template>
  <div class="sticky top-0 inset-x-0 px-4 py-2 z-50 bg-midnight border-t-2 border-pewter text-white text-base tracking-tighter ">
    <div class="w-full flex justify-between text-xs leading-none">
      <span v-if="prevLocation && locations[0]" class="inline-flex items-center mr-auto">
        <nuxt-img class="h-4 w-auto mr-1" src="/arrow-left.svg" alt="Left arrow" />
        Previous
      </span>
      <span v-if="nextLocation && locations.slice(-1)[0]" class="inline-flex items-center ml-auto">
        Next
        <nuxt-img class="h-4 w-auto ml-1" src="/arrow-right.svg" alt="Right arrow" />
      </span>
    </div>
    <nav class="flex flex-wrap justify-between xl:text-lg 2xl:text-xl">
      <nuxt-link
        v-for="(location, index) in locations"
        :key="'location_nav_' + index"
        :to="'/themes/' + location.slug"
        class="inline-block hover:underline"
        :class="locationClass(location)"
      >
        {{ location.title }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LocationsNav',
  data () {
    return {
      className: '',
      prevLocation: false,
      nextLocation: false,
      locations: []
    }
  },
  async fetch () {
    this.locations = await this.$content('themes')
      .sortBy('order')
      .fetch()

    const slug = this.$route.params.slug
    const page = await this.$content('themes/' + slug)
      .fetch()

    const [prevLocation, nextLocation] = await this.$content('themes')
      .sortBy('order')
      .surround(page.slug)
      .fetch()

    this.prevLocation = prevLocation
    this.nextLocation = nextLocation
  },
  methods: {
    locationClass (location) {
      const classes = []

      if (this.prevLocation && (location.slug === this.prevLocation.slug)) {
        classes.push('mr-auto')
      } else if (this.nextLocation && (location.slug === this.nextLocation.slug)) {
        classes.push('ml-auto')
      } else {
        classes.push('hidden')
        // classes.push('lg:block')
      }

      return classes.join(' ')
    }
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply font-bold underline;
}
</style>
