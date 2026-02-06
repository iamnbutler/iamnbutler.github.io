<script>
  let { data } = $props();
</script>

<div class="container prose">
  <small><a href="/projects">&larr; projects</a></small>
  <h1>{data.meta.title}</h1>
  <small>{data.meta.date.slice(0, 10)}</small>
  {#if data.meta.demoURL}<div><a href={data.meta.demoURL}>demo</a></div>{/if}
  {#if data.meta.repoURL}<div><a href={data.meta.repoURL}>source</a></div>{/if}
  <data.component />
</div>
