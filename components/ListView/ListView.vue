<template>
  <div class="flex flex-col flex-grow h-full font-light list-view">
    <ListViewMeta />
    <div class="post-list">
      <slot>
        No posts.
      </slot>
    </div>
  </div>
</template>

<style>
.post-list {
  overflow-y: scroll;
}
</style>