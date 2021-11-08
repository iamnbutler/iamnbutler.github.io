<template>
<Base subnav>
  <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="project of projects" :key="project.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NavLink :to="{ name: 'project-slug', params: { slug: project.slug } }">
                {{ project.title }}
            </NavLink>
          </li>
        </ul>
      </nav>
  </template>
  <Nuxt />
</Base>
    
</template>

<script>
export default {
  async asyncData({ $content, params }) {

    const projects = await $content("projects")
      .only(["title", "description", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      projects,
    };
  },
};
</script>
