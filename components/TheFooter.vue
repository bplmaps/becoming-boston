<template>
  <footer class="bg-midnight text-pewter">
    <div class="container mx-auto px-5 py-8 sm:py-14">
      <div class="flex flex-wrap justify-start items-end space-x-8 pb-6 mb-4 sm:pb-10 sm:mb-6 xl:pb-14 xl:space-x-16">
        <a href="https://www.leventhalmap.org/" target="_blank">
          <nuxt-img class="h-10 w-auto sm:h-10 xl:h-18" src="/lmec-logo.png" sizes="sm:224px md:320px lg:576px xl:576px 2xl:576px" alt="Normal V. Leventhal Map & Education Center logo" />
        </a>
        <a href="https://www.leventhalmap.org/visit" class="mb-2 font-sans bg-cobalt rounded py-1 px-2 font-extrabold">Visit the exhibition in person</a>
        <a href="https://www.leventhalmap.org/donate" class="mb-2 font-sans bg-cobalt rounded py-1 px-2 font-extrabold">Support LMEC</a>

      </div>
      <div class="mb-4 font-serif">
        <p class="mb-2"><span class="bg-gray-300 rounded px-1 py-1 mr-1 text-midnight inline-block font-sans text-sm font-extrabold">Permissions</span> All content in this digital exhibition, with the exception of object images from collections other than the Leventhal Map & Education Center, is licensed on a <a href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons BY-ND 4.0 License</a>.</p>
        <p class="mb-2"><span class="bg-gray-300 rounded px-1 py-1 mr-1 text-midnight inline-block font-sans text-sm font-extrabold">Citation</span> Garrett Dash Nelson et al., “{{ pageTitle  }},” in <i>Becoming Boston: Eight Moments in the Geography of a Changing City</i> (Leventhal Map & Education Center at the Boston Public Library, 2022). https://www.leventhalmap.org/digital-exhibitions/becoming-boston{{ $nuxt.$route.path }}</p>
        <p class="mb-2"><span class="bg-gray-300 rounded px-1 py-1 mr-1 text-midnight inline-block font-sans text-sm font-extrabold">Credits</span> This exhibition was curated by Garrett Dash Nelson, together with the staff of the Leventhal Map & Education Center, including Ezra Acevedo, Emily Bowe, Lauren Chen, Michelle LeBlanc, Lynn Brown, Ian Spangler, Rachel Sharer, and Megan Nally. The physical exhibition was designed by Joelle Riffle.</p>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    pageTitle: { type: String, default: 'Home' }
  }
}
</script>
