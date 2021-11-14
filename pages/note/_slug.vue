<template>
  <Base subnav>
    <template v-slot:header> natebutler{{ note.path }} </template>
    <template v-slot:subnav>
      <nav role="section-navigation" class="flex flex-col">
        <ul>
          <li v-for="note of notes" :key="note.slug">
            <!-- Remember to import the variables needed in the call below -->
            <NavLink dynamic :name="'note-slug'" :slug='note.slug'>
              <div class="flex flex-col item">
                <p>{{ note.title }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{note.type}}</p>
              </div>
            </NavLink>
          </li>
        </ul>
        
      </nav>
    </template>
    <BaseContent>
      <ArticleProse>
        <!-- Variables from YAML -->
        <p class="italic">{{ note.subtitle }}</p>
        <p>
          {{ formatDate(note.date) }}
        </p>
        <!-- Content -->
        <nuxt-content :document="note" />

        <!-- Author pages, code highlighting and more still here: https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/#adding-a-vue-component -->
      </ArticleProse>
      <template v-slot:sidebar>
        <nav class="flex flex-col leading-loose toc">
          <!-- Table of Contents -->
          <div class="pb-4 note-meta">
            <p class="font-bold">Meta</p>
            <p v-if="note.link">
              Link:
              <a :href="note.link" class="underline">{{ note.title }}</a>
            </p>
          </div>

          <p class="font-bold">Contents</p>
          <ul>
            <li v-for="link of note.toc" :key="link.id">
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
    const note = await $content("note", params.slug).fetch();
    const notes = await $content("note")
      .only(["title", "type", "description", "slug", "date"])
      .sortBy("date", "desc")
      .fetch();

    return {
      note,
      notes,
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
