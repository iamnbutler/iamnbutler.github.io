<template>
  <div
    class="spacer"
    :class="{
      'w-8 h-8': size === 16,
      'w-4 h-4': size === 8
    }"
  ></div>
</template>

<script>
export default {
  props: {
    size: { type: Number, default: 16 }
  }
};
</script>