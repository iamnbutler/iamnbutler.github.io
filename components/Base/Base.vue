<template>
  <main>
    <div class="app-container">
      <div v-show="header" class="app-header">
        <slot name="header">
            <p>Nate Butler</p>
        </slot>
      </div>
      <div v-show="nav" class="app-nav">
        <slot name="nav">
          <Nav />
        </slot>
      </div>
      <div v-show="subnav" class="app-subnav">
        <slot name="subnav"></slot>
      </div>
      <div class="app-content">
        <slot></slot>
      </div>
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
.app-container {
  display: grid;
  grid-template-columns: 16em 16em 1fr;
  grid-template-rows: 4em 1fr;
  gap: 0px 0px;
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

.app-content {
  grid-area: app-content;
}
</style>
