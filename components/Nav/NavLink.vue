<template>
    <NuxtLink :to="to" :active-class="'active font-extrabold'"
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
  },
};
</script>
