<script>
  let { data } = $props();
</script>

<div class="container">
  <h1><a href="/">~</a> / posts</h1>
  {#each data.posts as post}
    <div><a href="/blog/{post.slug}">{post.title}</a> <small>{post.date.slice(0, 10)}</small></div>
  {/each}
  {#if data.posts.length === 0}<div><small>no posts yet</small></div>{/if}
</div>

<style>
  div :global(> div) { padding: var(--sp-xs) 0; }
</style>
