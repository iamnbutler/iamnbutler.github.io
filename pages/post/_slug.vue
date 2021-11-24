<template>
  <Base>
    <template v-slot:listview>
      <ListView>
        <article v-for="post of posts" :key="post.slug">
          <!-- Remember to import the variables needed in the call below -->
          <PostListItem :post="post"></PostListItem>
        </article>
      </ListView>
    </template>
    <template v-slot:contentview>
      <ContentView>
        <template v-slot:title>{{ article.title }}</template>
        <template v-slot:meta>{{ article.date }}</template>
        <div class="m-5">{{ article.excerpt }}</div>
        <nuxt-content :document="article" />
      </ContentView>
    </template>
  </Base>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("posts", params.slug).fetch();
    const posts = await $content("posts")
      .only(["title", "excerpt", "slug", "date"])
      .sortBy("date", "desc")
      .fetch();
    return {
      article,
      posts
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>