<template>
  <main>
    <div class="app-container font-mono text-black dark:text-white bg-gray-200 dark:bg-gray-700">
      <div v-if="header" class="app-header tracking-wider flex items-center pl-8 pr-8 bg-white dark:bg-gray-900">
        <slot name="header">
          <p>natebutler</p>
        </slot>
      </div>
      <div v-if="nav" class="app-nav p-8 leading-loose bg-white dark:bg-gray-900">
        <slot name="nav">
          <Nav />
        </slot>
      </div>
      <div v-if="subnav" class="app-subnav p-8 leading-loose bg-white dark:bg-gray-900">
        <slot name="subnav"></slot>
      </div>
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    nav: {
      type: Boolean,
      default: true,
    },
    subnav: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
body {
  overflow: hidden;
}

.app-container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 12em 24em 1fr;
  grid-template-rows: 4em 1fr;
  gap: 1px 1px;
  grid-auto-flow: row;
  grid-template-areas:
    "app-header app-header app-header"
    "app-nav app-subnav app-content";
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
