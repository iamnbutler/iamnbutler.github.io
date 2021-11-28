<template>
  <NuxtLink
    :to="'/post/' + post.slug"
    class="block p-2 mt-1 mb-1 post-list-item mix-blend-exclusion hover:bg-white hover:mix-blend-exclusion hover:text-black"
    :exact-active-class="'bg-white text-black'"
  >
    <div class="font-mono text-sm leading-4 text-right post-number">
      {{ number }}.
    </div>
    <div class="flex font-bold leading-4 post-title">
      <span v-if="post.title"
        >{{ post.title }}
        <div v-if="post.featured" class="flex items-center ml-2 featured">
          <Icon :size="8" name="star" :padded="false" /></div
      ></span>
      <span v-else>No Title</span>
    </div>
    <div class="text-sm post-date content-text opacity-80">
      <span v-if="post.created_at">{{ post.created_at }}</span>
      <span v-else>XX-XX-XX</span>
    </div>
    <div class="text-sm leading-6 post-tags content-text opacity-80">
      <ul v-if="post.tags[0]" class="tags">
        <li
          v-for="tag in post.tags"
          :key="tag.id"
          class="inline lowercase list-tag tag"
        >
          {{ tag.name }}
        </li>
      </ul>
      <span v-else>No Tags</span>
    </div>
    <div class="font-mono text-sm post-intro content-text opacity-80">
      <span v-if="post.excerpt">{{ post.excerpt }}</span>
      <span v-else>No description.</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: Object,
    number: Number,
  },
};
</script>

<style>
.list-tag:not(:last-of-type)::after {
  content: "· ";
}

.post-list-item {
  display: grid;
  grid-template-columns: 2em 1fr 14em;
  grid-template-rows: 1em 2em;
  grid-gap: 0.5em 0.5em;
  width: 100%;
}

.post-number {
  grid-area: 1 / 1 / 2 / 2;
}

.post-title {
  grid-area: 1 / 2 / 2 / 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-date {
  grid-area: 1 / 3 / 2 / 4;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-tags {
  grid-area: 2 / 3 / 3 / 4;
  overflow: hidden;
  text-align: right;
}

.post-intro {
  grid-area: 2 / 2 / 3 / 3;
  overflow: hidden;
  line-height: 1rem;
}
</style>