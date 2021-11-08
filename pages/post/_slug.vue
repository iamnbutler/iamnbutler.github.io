<template>
  <div class="flex flex-row">
    <div class="font-mono p-8">
      <nav role="section-navigation" class="sub-nav flex flex-col p-4">
        <ul>
          <li v-for="post of posts" :key="post.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NavLink :to="{ name: 'post-slug', params: { slug: post.slug } }">
                {{ post.title }}
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav class="toc flex flex-col p-4">
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
    <article class="prose p-12 text-mono">
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
