<template>
  <div class="pt-10 content-view">
    <div class="max-w-lg mx-auto mt-2 content-centered">
      <h1 class="font-serif text-5xl font-extrabold leading-tight">
        <slot name="title">
          No post content.
        </slot>
      </h1>

      <div class="flex items-end h-8 mt-2 leading-6 meta">
        <slot name="meta">
          <span>118.</span>
          &nbsp;∫&nbsp;
          <span>2021-11-06</span>
          &nbsp;∫&nbsp;
          <span>art,generative</span>
        </slot>
      </div>

      <slot>
        No content.
      </slot>

      <div class="content"></div>
    </div>
  </div>
</template>