<template>
  <div class="app-content bg-gray-200 dark:bg-gray-700">
    <div class="content-sidebar p-8 bg-white dark:bg-gray-900">
      <slot name="sidebar"></slot>
    </div>
    <div class="content-main p-8 bg-white dark:bg-gray-900">
      <div class="content-inner max-w-4xl mx-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
.app-content {
  grid-area: app-content;
  overflow: hidden;
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-auto-flow: row;
  grid-template-areas:
    "content-main content-sidebar"
    "content-main content-sidebar";
}

.content-sidebar {
  grid-area: content-sidebar;
}

.content-main {
  grid-area: content-main;
  overflow-y: auto;
}
</style>
