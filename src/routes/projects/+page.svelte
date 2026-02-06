<script>
  let { data } = $props();
</script>

<div class="container">
  <h1><a href="/">~</a> / projects</h1>
  {#each data.projects as project}
    <div><a href="/projects/{project.slug}">{project.title}</a> <small>{project.date.slice(0, 10)}</small></div>
  {/each}
</div>

<style>
  div :global(> div) { padding: var(--sp-xs) 0; }
</style>
