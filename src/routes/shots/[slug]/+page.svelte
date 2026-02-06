<script>
  let { data } = $props();
</script>

<div class="container">
  <small><a href="/shots">&larr; shots</a></small>
  {#if data.shot.title}<h1>{data.shot.title}</h1>{/if}
  {#each data.shot.images as img}
    <img src={img.url} alt={img.alt || ''} />
  {/each}
</div>

<style>
  img { margin-top: var(--sp); border: 1px solid var(--border); }
</style>
