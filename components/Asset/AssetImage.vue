<template>
  <nuxt-picture
    provider="cloudinary"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: String,
    width: String,
    height: {
      String,
      default: "auto",
    },
  },
};
</script>
