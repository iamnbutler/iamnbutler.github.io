<template>
    <NuxtLink v-if="exact" :to="to" class="pb-2" :exact-active-class="'active font-extrabold'"
      ><slot
    /></NuxtLink>
    <NuxtLink v-else :to="to" class="pb-2" :active-class="'active font-extrabold'"
      ><slot
    /></NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    exact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
