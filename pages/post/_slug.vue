<template>
  <Base>
    <template v-slot:listview>
      <ListView>
        <article v-for="(post, number) in posts" :key="post.title">
          <PostListItem :post="post" :number="posts.length - number" />
        </article>
      </ListView>
    </template>
    <template v-slot:contentview>
      <ContentView :article="article" :number="posts.length - number" />
    </template>
  </Base>
</template>

<script>
import { getSinglePost } from "~/api/posts";
import { getPosts } from "~/api/posts";

export default {
  async asyncData({ params }) {
    const posts = await getPosts();
    const article = await getSinglePost(params.slug);
    console.log(article);
    return { article: article, posts: posts };
  },
  data() {
    return {
      number: 1,
    };
  },
};
</script>