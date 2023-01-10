<template>
  <div
    class="font-serif"
    :class="showSplash && 'h-screen overflow-hidden'"
  >
    <div v-if="page.hero" class="relative">
      <div
        class="absolute z-50 inset-0 w-full h-full flex justify-center items-center transition-opacity duration-1000 ease-in-out cursor-pointer"
        :class="!showSplash && 'opacity-0 pointer-events-none'"
        @click="showSplash = false"
      >
        <nuxt-img
          class="block m-auto w-3/4 max-w-3xl h-auto sm:w-1/2"
          src="/brand-logo.png"
          alt="Becoming Boston"
          sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        />
      </div>
      <img
        v-if="page.hero.img"
        class="absolute object-cover object-center w-full h-full"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        :src="page.hero.img.src"
        :alt="page.hero.img.alt"
      >
      <div class="relative bg-midnight bg-opacity-60 text-white">
        <div
          class="relative container mx-auto px-5 pt-20 pb-14 min-h-screen flex flex-col items-stretch transition-opacity duration-1000 ease-in-out sm:pb-28 xl:py-40"
          :class="showSplash && 'opacity-0 pointer-events-none'"
        >
          <h1 v-if="page.hero.headline" class="font-sans font-extrabold leading-snug text-3xl pb-8 mb-4 w-full lg:mb-0 lg:text-5xl 2xl:text-6xl">
            {{ page.hero.headline }}
          </h1>
          <inline-button text="Enter the exhibition" className="font-sans" href="#main" />

        </div>
      </div>
    </div>

    <div v-if="page.body_paragraph" class="container mx-auto px-5 py-14 sm:py-28 xl:max-w-[68rem]">
      <p class="text-2xl leading-normal xl:text-4xl mb-4" id="main">
        {{ page.body_paragraph }}
      </p>

      <inline-button text="See the themes" className="font-sans" href="#themes" />
    </div>

    <div
      v-if="page.locations"
      class="relative bg-midnight text-pewter"
    >
      <img
        v-if="page.locations.img"
        class="block w-full h-auto bg-black aspect-square object-cover object-center md:absolute md:top-0 md:right-0 md:w-1/3 md:h-full"
        sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        :src="page.locations.img.src"
        :alt="page.locations.img.alt"
      />
      <div class="md:w-2/3 py-14 sm:py-28" id="themes">
        <div class="px-8 lg:px-12">
          <h2 v-if="page.locations.heading" class="font-sans text-xl italic leading-none mb-4 max-w-[14rem] lg:mb-8 xl:text-3xl xl:max-w-md 2xl:text-4xl 2xl:max-w-lg">
            {{ page.locations.heading }}
          </h2>
          <ul
            v-if="allLocations.length"
            class="text-2xl xl:text-5xl "
          >
            <li
              v-for="(location, index) in allLocations"
              :key="'locations_' + index"
              class="mb-2"
            >
              <nuxt-link
                :to="'/themes/' + location.slug"
                class="hover:underline"
              >
                {{ location.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="page.visit_info" class="bg-periwinkle">
      <div class="container mx-auto px-5 py-14 sm:py-28 xl:max-w-[68rem]">
        <h3 class="font-sans font-semibold text-3xl">
         {{ page.visit_info.headline }}
        </h3>
        <p class="my-2">
          {{ page.visit_info.text  }}
        </p>
        <div>
          <inline-button :text="page.visit_info.button_text" className="font-sans" :href="page.visit_info.url" />
        </div>
      </div>
    </div>

    <the-footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const page = await $content('index')
      .fetch()

    const allLocations = await $content('themes')
      .sortBy('order')
      .fetch()

    return { page, allLocations }
  },
  data () {
    return {
      showSplash: true
    }
  },
  head () {
    return {
      titleTemplate: this.page.title + ' -  %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.metaDescription
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og-desc',
          name: 'og:description',
          content: this.page.metaDescription
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: this.page.metaDescription
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.showSplash = false
    }, 1200)
  }
}
</script>
