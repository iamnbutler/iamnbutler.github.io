<template>
  <Base subnav>
    <template v-slot:header>
      natebutler{{ article.path }}{{ article.extension }}
    </template>
    <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="post of posts" :key="post.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NuxtLink
              class="pb-2"
              :to="{ name: 'post-slug', params: { slug: post.slug } }"
              :active-class="'active font-extrabold'"
            >
              {{ post.title }}
            </NuxtLink>
          </li>
        </ul>
        <p class="italic text-gray-500">(not yet ordered)</p>
      </nav>
    </template>
    <BaseContent>
      <article class="prose text-mono">
        <!-- Variables from YAML -->
        <h1>{{ article.title }}</h1>
        <p>{{ article.subtitle }}</p>
        <p>
          {{ formatDate(article.date) }}
        </p>
        <!-- Content -->
        <nuxt-content :document="article" />

        <!-- Author pages, code highlighting and more still here: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#adding-a-vue-component -->
      </article>
      <template v-slot:sidebar>
        <nav class="toc flex flex-col leading-loose">
          <!-- Table of Contents -->
          <p class="font-bold">Contents</p>
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <!-- :classes are variable based on the depth of the headline using link.depth -->
              <NuxtLink
                :to="`#${link.id}`"
                :class="{
                  'py-4': link.depth === 2,
                  'ml-6 pb-4': link.depth === 3,
                }"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </template>
    </BaseContent>
  </Base>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("posts", params.slug).fetch();

    const posts = await $content("posts")
      .only(["title", "description", "slug", "date"])
      .sortBy("date", "desc")
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
