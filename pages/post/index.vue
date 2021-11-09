<template>
  <Base subnav>
    <template v-slot:header>
      natebutler/post
    </template>
    <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="post of posts" :key="post.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NuxtLink
              class="block pb-2"
              :to="{ name: 'post-slug', params: { slug: post.slug } }"
              :active-class="'active font-extrabold'"
            >
              {{ post.title }}
            </NuxtLink>
          </li>
        </ul>
        
      </nav>
    </template>
    <BaseContent>
      <article class="prose mx-auto text-mono"></article>
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