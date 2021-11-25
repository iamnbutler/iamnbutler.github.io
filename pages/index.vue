<template>
  <Base :content="false">
    <template v-slot:listview>
      <ListView>
        <article v-for="post of posts" :key="post.slug">
          <!-- Remember to import the variables needed in the call below -->
          <PostListItem :post="post"></PostListItem>
        </article>
      </ListView>
    </template>
  </Base>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("posts")
      .only(["title", "excerpt", "slug", "date"])
      .sortBy("date", "desc")
      .fetch();
    return {
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