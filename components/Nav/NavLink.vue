<template>
    <NuxtLink v-if="exact" :to="to" class="pb-3" :exact-active-class="'active font-extrabold'"
      ><slot
    /></NuxtLink>
    <NuxtLink v-else-if="dynamic" class="block pb-3" :to="{ name: name, params: { slug: slug } }" :active-class="'active font-extrabold'"
      ><slot
    /></NuxtLink>
    <NuxtLink v-else :to="to" class="pb-3" :active-class="'active font-extrabold'"
      ><slot
    /></NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    dynamic: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: false,
    },
    slug: {
      type: [String, Object],
      default: null,
    },
  },
};
</script>
