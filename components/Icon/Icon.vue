<template>
  <i
    class="flex items-center cursor-pointer fill-current icon mix-blend-exclusion"
    :class="{
      'p-2': padded,
      'mr-2 ml-2': spaced,
      'pointer-events-none': !button,
      'hover:bg-white': button,
      'bg-transparent': !active,
      'bg-white': active
    }"
  >
    <inline-svg
      :src="'/svg/icon/Icon-' + name + '.svg'"
      fill="inherit"
      :width="size"
      :height="size"
      class="mix-blend-exclusion"
    ></inline-svg>
  </i>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg
  },
  props: {
    name: { type: String, default: "Leaf" },
    button: { type: Boolean, default: true },
    spaced: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    padded: { type: Boolean, default: true },
    size: { type: Number, default: 16 }
  }
};
</script>
