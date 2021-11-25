<template>
  <div class="h-full overflow-hidden overflow-y-scroll content-view">
    <div class="max-w-2xl pt-10 pb-10 mx-auto content-centered">
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

      <div class="prose prose-dark content">
        <slot>
          No content.
        </slot>
      </div>
    </div>
  </div>
</template>