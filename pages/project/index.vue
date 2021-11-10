<template>
    <Base subnav>
    <template v-slot:header> natebutler/projects </template>
    <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="project of projects" :key="project.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NavLink dynamic :name="'project-slug'" :slug='project.slug'>
              {{ project.title }}
            </NavLink>
          </li>
        </ul>
        
      </nav>
    </template>
    <BaseContent>
      <article v-if="project" class="prose mx-auto text-mono"></article>
    </BaseContent>
  </Base>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    const projects = await $content("projects")
      .only(["title", "description", "slug", "date"])
      .sortBy("date", "desc")
      .fetch();

    return {
      project,
      projects,
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