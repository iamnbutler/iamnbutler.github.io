<template>
  <main
    class="min-h-screen p-2 text-white bg-black font-neue"
    :class="[{ 'list-pane': list === true, 'content-pane': content === true }]"
  >
    <BaseNav />
    <div class="font-light list-view">
      <ListViewMeta />
      <div class="post-list">
        <div class="post-list-item-wrapper" v-for="post in 9" :key="post">
          <PostListItem />
        </div>
      </div>
    </div>
    <BaseContentNav />
    <div class="content-view"></div>
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

main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2rem 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}

.site-nav {
  background-color: var(--color-purple);
}

.content-nav {
  background-color: var(--color-purple);
}

.list-pane:not(.content-pane) {
  .site-nav {
    grid-column: 1 / span 2;
    grid-row: 1/1;
  }
  .content-nav {
    display: none;
  }
  .content-view {
    display: none;
  }
  .list-view {
    grid-column: 1 / span 2;
    grid-row: 2/2;
  }
}

.list-pane.content-pane {
  .site-nav {
    grid-column: 1/2;
    grid-row: 1/1;
  }
  .content-nav {
    grid-column: 2/2;
    grid-row: 1/1;
  }
  .content-view {
    grid-column: 2/2;
    grid-row: 2/2;
  }
  .list-view {
    grid-column: 1/2;
    grid-row: 2/2;
  }
}
</style>
