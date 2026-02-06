<script>
  let { data } = $props();
</script>

<div class="container">
  <h1><a href="/">~</a> / lists</h1>
  {#each data.lists as list}
    <div><a href="/lists/{list.slug}">{list.title}</a></div>
  {/each}
</div>

<style>
  div :global(> div) { padding: var(--sp-xs) 0; }
</style>
