<template>
  <Base :content="false">
    <template v-slot:listview>
      <ListView>
        <article
          v-for="(post, number) in posts"
          :key="post.title"
          :number="number + 1"
        >
          <PostListItem :post="post" />
        </article>
      </ListView>
    </template>
  </Base>
</template>

<script>
import { getPosts } from "~/api/posts";

export default {
  async asyncData() {
    const posts = await getPosts();
    return { posts: posts };
  },
};
</script>