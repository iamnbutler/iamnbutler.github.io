<template>
  <div class="content-grid max-w-5xl mx-auto">
    <div class="content-sidebar">
    </div>
    <div class="content-main">
      <article class="prose text-mono">
        <!-- Variables from YAML -->
        <h1>{{ project.title }}</h1>
        <h2>{{ project.subtitle }}</h2>
        <p>{{ project.slug }}{{ project.extension }}</p>
        <p>{{ project.path }}</p>
        <p>
          posted: {{ formatDate(project.createdAt) }} – updated:
          {{ formatDate(project.updatedAt) }}
        </p>
        <!-- Content -->
        <nuxt-content :document="project" />

        <!-- Author pages, code highlighting and more still here: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#adding-a-vue-component -->
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();

    return {
      project,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
.content-grid {
  display: grid;
  grid-template-columns: 1fr 16em;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
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
}
</style>
