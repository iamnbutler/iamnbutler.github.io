<template>
  <article class="prose text-mono">
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('posts', params.slug).fetch()

      return { article }
    }
  }
</script>