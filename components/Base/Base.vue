<template>
  <main class="min-h-screen bg-white dark:bg-black">
    <div
      class="flex flex-col font-mono text-black bg-gray-200 app-container dark:text-white dark:bg-gray-900 md:h-screen md:grid"
      :class="[{ two: subnav === false, three: subnav === true }]"
    >
      <div v-if="nav" class="p-4 leading-tight bg-white app-nav dark:bg-black">
        <slot name="nav">
          <Nav />
        </slot>
      </div>
      <div
        v-if="subnav"
        class="p-4 leading-tight bg-white app-subnav dark:bg-black"
      >
        <slot name="subnav"></slot>
      </div>
      <slot></slot>
      <div
        v-if="header"
        class="flex items-center pl-4 pr-4 tracking-wider text-gray-500 bg-white app-header dark:text-gray-400 dark:bg-black"
      >
        <slot name="header">
          <p>natebutler</p>
        </slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: true
    },
    nav: {
      type: Boolean,
      default: true
    },
    subnav: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.app-container {
  width: 100vw;
  grid-template-columns: 1.5fr 2.5fr 8fr;
  grid-template-rows: 1fr 2em;
  gap: 1px 1px;
  grid-auto-flow: row;

  &.two {
    grid-template-areas:
      "app-nav app-content app-content"
      "app-header app-header app-header";
  }

  &.three {
    grid-template-areas:
      "app-nav app-subnav app-content"
      "app-header app-header app-header";
  }
}

.app-header {
  grid-area: app-header;
}

.app-nav {
  grid-area: app-nav;
}

.app-subnav {
  grid-area: app-subnav;
}
</style>
