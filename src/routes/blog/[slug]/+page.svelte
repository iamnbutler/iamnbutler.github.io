<script>
  let { data } = $props();
</script>

<div class="container prose">
  <small><a href="/blog">&larr; posts</a></small>
  <h1>{data.post.title}</h1>
  <small>{data.post.date.slice(0, 10)}</small>
  <div>{@html data.post.content}</div>
</div>
