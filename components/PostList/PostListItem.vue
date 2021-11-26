<template>
  <NuxtLink
    :to="'/post/' + post.slug"
    class="block pt-2 pb-2 mt-2 post-list-item mix-blend-exclusion hover:bg-white hover:mix-blend-exclusion hover:text-black"
    :exact-active-class="'bg-white text-black'"
  >
    <div>
      <header class="flex items-end justify-between">
        <div class="flex items-end left">
          <div class="w-8 font-mono text-sm leading-4 text-right id">
            {{ number }}.
          </div>
          <h2 class="relative mt-px ml-2 font-bold leading-4 top-px">
            {{ post.title }}
          </h2>
          <div v-if="post.featured" class="flex items-center ml-2 featured">
            <Icon :size="8" name="star" :padded="false" />
          </div>
        </div>
        <div class="flex items-end text-sm right">
          <div class="font-mono leading-4 date">{{ post.date }}</div>
        </div>
      </header>
      <div class="flex justify-between mt-2 font-mono content">
        <div class="flex left">
          <div class="pl-10 pr-8 text-sm leading-6 content-text opacity-80">
            <span v-if="post.excerpt">{{ post.excerpt }}</span>
            <span v-else>No description.</span>
          </div>
        </div>
        <div class="flex flex-shrink-0 pr-1 right">
          <ul class="text-sm leading-6 opacity-80 tags">
            <li
              v-for="tag in post.tags"
              :key="tag.id"
              class="inline lowercase list-tag tag"
            >
              {{ tag.name }}
            </li>
          </ul>
        </div>
      </div>
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
</style>