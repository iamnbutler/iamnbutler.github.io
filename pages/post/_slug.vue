<template>
  <article class="prose text-mono">
    <nav class="toc">
      <!-- Table of Contents -->
      <ul>
        <li v-for="link of article.toc" :key="link.id">
            <!-- :classes are variable based on the depth of the headline using link.depth -->
          <NuxtLink :to="`#${link.id}`" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- Variables from YAML -->
    <h1>{{ article.title }}</h1>
    <h2>{{ article.subtitle }}</h2>
    <p>{{ article.slug }}{{ article.extension }}</p>
    <p>{{ article.path }}</p>
    <p>
      posted: {{ formatDate(article.createdAt) }} – updated:
      {{ formatDate(article.updatedAt) }}
    </p>
    <!-- Content -->
    <nuxt-content :document="article" />

    <!-- Author pages, code highlighting and more still here: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#adding-a-vue-component -->
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("posts", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
