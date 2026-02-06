<script>
  let { data } = $props();
</script>

<div class="container prose">
  <small><a href="/lists">&larr; lists</a></small>
  <h1>{data.meta.title}</h1>
  <data.component />
</div>
