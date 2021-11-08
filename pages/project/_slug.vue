<template>
  <Base subnav>
    <template v-slot:header> natebutler{{ project.path }} </template>
    <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="project of projects" :key="project.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NavLink
              :to="{ name: 'project-slug', params: { slug: project.slug } }"
            >
              {{ project.title }}
            </NavLink>
          </li>
        </ul>
      </nav>
    </template>
    <BaseContent>
      <article class="prose text-mono">
        <!-- Variables from YAML -->
        <h1>{{ project.title }}</h1>
        <p>{{ project.subtitle }}</p>
        <p>
          {{ formatDate(project.date) }}
        </p>
        <!-- Content -->
        <nuxt-content :document="project" />

        <!-- Author pages, code highlighting and more still here: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#adding-a-vue-component -->
      </article>
      <template v-slot:sidebar>
        <nav class="toc flex flex-col leading-loose">
          <!-- Table of Contents -->
          <div class="project-meta pb-4">
            <p class="font-bold">Meta</p>
            <p v-if="project.link">
              Link:
              <a :href="project.link" class="underline">{{ project.title }}</a>
            </p>
          </div>

          <p class="font-bold">Contents</p>
          <ul>
            <li v-for="link of project.toc" :key="link.id">
              <!-- :classes are variable based on the depth of the headline using link.depth -->
              <NuxtLink
                :to="`#${link.id}`"
                :class="{
                  'py-4': link.depth === 2,
                  'ml-6 pb-4': link.depth === 3,
                }"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </template>
    </BaseContent>
  </Base>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    const projects = await $content("projects")
      .only(["title", "description", "slug"])
      .sortBy("createdAt", "asc")
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
</style>
