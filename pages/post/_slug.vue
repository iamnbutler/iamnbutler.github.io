<template>
  <div class="content-grid max-w-5xl mx-auto">
    <div class="content-sidebar">
      <div class="font-mono">
        <nav class="toc flex flex-col">
          <!-- Table of Contents -->
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <!-- :classes are variable based on the depth of the headline using link.depth -->
              <NuxtLink
                :to="`#${link.id}`"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3,
                }"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="content-main">
      <article class="prose text-mono">
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
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("posts", params.slug).fetch();

    const posts = await $content("posts")
      .only(["title", "description", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      article,
      posts,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
.content-grid {
  display: grid;
  grid-template-columns: 1fr 16em;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "content-main content-sidebar"
    "content-main content-sidebar";
}

.content-sidebar {
  grid-area: content-sidebar;
}

.content-main {
  grid-area: content-main;
}
</style>
