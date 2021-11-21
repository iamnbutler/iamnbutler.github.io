<template>
  <div class="font-light list-view">
    <ListViewMeta />
    <div class="post-list">
      <div class="post-list-item-wrapper" v-for="post in 9" :key="post">
        <PostListItem />
      </div>
    </div>
  </div>
</template>