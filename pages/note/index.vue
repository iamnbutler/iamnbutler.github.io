<template>
  <Base subnav>
    <template v-slot:header>
      natebutler/note
    </template>
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
      <article class="mx-auto prose text-mono"></article>
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