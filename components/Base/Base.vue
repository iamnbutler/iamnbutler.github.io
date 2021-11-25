<template>
  <main class="flex flex-row h-full p-2 text-white bg-black font-neue">
    <div
      v-show="list === true"
      class="flex flex-col flex-grow h-full pr-2 app-panel"
    >
      <BaseNav />
      <slot name="listview">
        <ListView />
      </slot>
    </div>
    <div
      v-show="content === true"
      class="flex flex-col flex-grow h-full app-view"
    >
      <BaseContentNav />
      <slot name="contentview">
        <ContentView />
      </slot>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    list: {
      type: Boolean,
      default: true
    },
    content: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
:root {
  --color-purple: #7c0ff9;
}

html {
  width: 100vw;
  height: 100vh;
}

#__nuxt,
#__layout,
body {
  width: 100%;
  height: 100%;
}

body {
  min-height: none;
  overflow: hidden;
}

.site-nav {
  background-color: var(--color-purple);
}

.content-nav {
  background-color: var(--color-purple);
}
</style>
