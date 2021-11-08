<template>
<Base subnav>
  <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="post of posts" :key="post.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NavLink :to="{ name: 'post-slug', params: { slug: post.slug } }">
                {{ post.title }}
            </NavLink>
          </li>
        </ul>
      </nav>
  </template>
  <Nuxt />
</Base>
    
</template>

<script>
export default {
  async asyncData({ $content, params }) {

    const posts = await $content("posts")
      .only(["title", "description", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      posts,
    };
  },
};
</script>
