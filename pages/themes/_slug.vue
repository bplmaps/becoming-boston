<template>
  <div>
    <the-header />
    <locations-nav />
    <header :style="{ 'background-color': page.color }">
      <div class="container max-w-[52rem] mx-auto 2xl:max-w-[68rem] py-14 px-4">
        <h1 class="font-serif text-6xl text-paleyellow mb-4 w-full lg:mb-8">
          {{ page.title }}
        </h1>
        <p class="font-sans text-paleyellow text-xl leading-normal mb-4 lg:mb-8 xl:text-4xl">
          {{ page.description }}
        </p>
      </div>
    </header>
    <article class="container mx-auto px-5 py-4">
      <nuxt-content id="main"
        class="font-serif prose prose-midnight max-w-[52rem] mx-auto mt-4 2xl:max-w-[68rem] prose-h1:text-xl prose-h1:xl:text-4xl prose-h2:text-lg prose-h2:xl:text-3xl prose-h3:text-base prose-h3:xl:text-2xl prose-h4:text-base prose-h4:xl:text-2xl prose-h5:text-base prose-h5:xl:text-2xl prose-h6:text-base prose-h6:xl:text-2xl prose-p:xl:text-xl prose-ul:xl:text-xl prose-ol:xl:text-xl"
        :document="page" />
      <div v-if="page.objects" id="resources">

        <object-record v-for="(object, index) in page.objects" :objectInfo="object" :key="index" />

      </div>
    </article>

    <article class="container mx-auto px-5 py-4" v-if="page.previous_objects" id="previously-featured">
      <h2 class="text-5xl font-serif">Previously on Display</h2>
      <div>

        <object-record v-for="(object, index) in page.previous_objects" :objectInfo="object" :key="index" />

      </div>
    </article>




    <locations-nav />

    <the-footer :pageTitle="page.title" />

  </div>
</template>

<script>
export default {
  name: 'LocationsSlug',
  async asyncData({ $content, params }) {
    const slug = params.slug
    const page = await $content('themes/' + slug)
      .fetch()

    return {
      page
    }
  },
  data() {
    return {
      lightboxActive: false
    }
  },
  head() {
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
  }
}
</script>
