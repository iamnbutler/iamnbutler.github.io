<template>
  <Base />
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
