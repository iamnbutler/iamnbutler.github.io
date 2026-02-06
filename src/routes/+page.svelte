<script>
  let { data } = $props();
</script>

<div class="container">
  <header>
    <h1>Nate Butler</h1>
    <small>design, eng, rust</small>
  </header>

  <section>
    <h2>posts</h2>
    {#each data.posts as post}
      <div><a href="/blog/{post.slug}">{post.title}</a> <small>{post.date.slice(0, 10)}</small></div>
    {/each}
    {#if data.posts.length === 0}<div><small>no posts yet</small></div>{/if}
  </section>

  <section>
    <h2>projects</h2>
    {#each data.projects as project}
      <div><a href="/projects/{project.slug}">{project.title}</a> <small>{project.date.slice(0, 10)}</small></div>
    {/each}
  </section>

  <section>
    <h2>shots</h2>
    <div><a href="/shots">view all &rarr;</a></div>
  </section>

  <section>
    <h2>lists</h2>
    {#each data.lists as list}
      <div><a href="/lists/{list.slug}">{list.title}</a></div>
    {/each}
  </section>

  <section>
    <h2>work</h2>
    {#each data.work as w}
      <div>{w.company} <small>{w.role}, {w.dateStart}&ndash;{w.dateEnd}</small></div>
    {/each}
  </section>

  <footer>
    <small><a href="https://bsky.app/profile/nate.rip">bluesky</a> &middot; <a href="https://github.com/iamnbutler">github</a> &middot; iamnbutler@gmail.com</small>
  </footer>
</div>

<style>
  header, section, footer { margin-bottom: var(--sp-lg); }
  section > div { padding: var(--sp-xs) 0; }
  h2 { font-size: var(--fs); font-weight: 600; color: var(--fg-muted); margin-bottom: var(--sp-sm); text-transform: lowercase; }
  footer { border-top: 1px solid var(--border); padding-top: var(--sp); }
</style>
