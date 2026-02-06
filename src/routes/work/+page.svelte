<script>
  import { work } from '../../data/work';
</script>

<div class="container">
  <h1><a href="/">~</a> / work</h1>
  {#each work as w}
    <div class="entry">
      <div><strong>{w.company}</strong> <small>{w.role}</small></div>
      <small>{w.dateStart} &ndash; {w.dateEnd}</small>
      {#if w.description}<div><small>{w.description}</small></div>{/if}
    </div>
  {/each}
</div>

<style>
  .entry { padding: var(--sp-sm) 0; }
  .entry + .entry { border-top: 1px solid var(--border); }
</style>
