<script>
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Nate Butler</title>
</svelte:head>

{@render children()}
