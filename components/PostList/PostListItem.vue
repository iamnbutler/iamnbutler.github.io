<template>
  <NuxtLink :to="post.slug">
    <div
      class="pt-2 pb-2 mt-2 post-list-item mix-blend-exclusion hover:bg-white hover:mix-blend-exclusion hover:text-black"
    >
      <header class="flex items-end justify-between">
        <div class="flex items-end left">
          <div class="w-8 font-mono text-sm leading-4 text-right id">118.</div>
          <h2 class="relative mt-px ml-2 font-bold leading-4 top-px">
            {{ post.title }}
          </h2>
          <!-- <div class="flex items-center ml-2">
          <Icon :size="8" name="star" :padded="false" />
        </div> -->
        </div>
        <div class="flex items-end text-sm right">
          <div class="font-mono leading-4 date">{{ post.date }}</div>
        </div>
      </header>
      <div class="flex justify-between mt-2 font-mono content">
        <div class="flex left">
          <div class="pl-10 pr-8 text-sm leading-6 content-text opacity-80">
            Post summary
          </div>
        </div>
        <div class="flex right">
          <div class="tags">typography,website</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>