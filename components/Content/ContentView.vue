<template>
  <div class="h-full overflow-hidden overflow-y-scroll content-view">
    <div class="max-w-2xl pt-10 pb-10 mx-auto content-centered">
      <h1 class="font-serif text-5xl font-extrabold leading-tight">
        <span v-if="article.title">{{ article.title }}</span>
        <span v-else>No title</span>
      </h1>

      <div class="flex items-end h-8 mt-2 leading-6 meta">
        <slot name="meta">
          <span>#{{ number }}</span>
          &nbsp;∫&nbsp;
          <span>{{ article.created_at }}</span>
          <ul v-if="article.tags[0]" class="inline tags">
            <li class="inline">&nbsp;∫&nbsp;</li>
            <li
              v-for="tag in article.tags"
              :key="tag.id"
              class="inline lowercase tag list-tag"
            >
              {{ tag.name }}
            </li>
          </ul>
        </slot>
      </div>

      <div class="mt-12 prose prose-xl prose-dark content">
        <div v-html="article.html" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
    number: Number,
  },
};
</script>

<style scoped>
.list-tag:not(:last-of-type)::after {
  content: "· ";
}
</style>
