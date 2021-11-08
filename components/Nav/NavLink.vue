<template>
    <NuxtLink v-if="exact" :to="to" :exact-active-class="'active font-extrabold'"
      ><slot
    /></NuxtLink>
    <NuxtLink v-else :to="to" :active-class="'active font-extrabold'"
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
