<script>
  let { data } = $props();
</script>

<div class="container">
  <h1><a href="/">~</a> / shots</h1>
  <div class="grid">
    {#each data.shots as shot}
      <a href="/shots/{shot.slug}">
        {#if shot.thumb}<img src={shot.thumb} alt={shot.title} loading="lazy" />{/if}
        <small>{shot.title || shot.slug}</small>
      </a>
    {/each}
  </div>
  {#if data.shots.length === 0}<small>no shots yet</small>{/if}
</div>

<style>
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--sp); }
  .grid a { display: block; }
  .grid img { aspect-ratio: 1; object-fit: cover; border: 1px solid var(--border); }
</style>
