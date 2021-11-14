<template>
  <div class="bg-gray-200 app-content dark:bg-gray-900">
    <div
      v-show="sidebarActive"
      class="p-4 bg-white content-sidebar dark:bg-black"
    >
      <slot name="sidebar"></slot>
    </div>
    <div class="p-4 bg-white content-main dark:bg-black">
      <div class="max-w-3xl content-inner ">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sidebarActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.app-content {
  grid-area: app-content;
  overflow: hidden;
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-auto-flow: row;
  &.sidebar-active {
    grid-template-areas:
      "content-main content-sidebar"
      "content-main content-sidebar";
  }

  &:not(.sidebar-active) {
    grid-template-areas:
      "content-main content-main"
      "content-main content-main";
  }
}

.content-sidebar {
  grid-area: content-sidebar;
}

.content-main {
  grid-area: content-main;
  overflow-y: auto;
}
</style>
