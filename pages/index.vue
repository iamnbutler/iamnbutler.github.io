<template>
  <Base :content="false">
    <template v-slot:listview>
      <ListView>
        <article v-for="(post, number) in posts" :key="post.title">
          <PostListItem :post="post" :number="posts.length - number" />
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
  data() {
    return {
      number: 1,
    };
  },
};
</script>