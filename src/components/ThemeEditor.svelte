<script lang="ts">
  import ColorEditor from './editors/ColorEditor.svelte';
  import TypeEditor from './editors/TypeEditor.svelte';
  import SpacingEditor from './editors/SpacingEditor.svelte';
  import CornerEditor from './editors/CornerEditor.svelte';
  import ShadowEditor from './editors/ShadowEditor.svelte';
  import TransitionEditor from './editors/TransitionEditor.svelte';
  import ExperimentalEditor from './editors/ExperimentalEditor.svelte';

  const STORAGE_KEY = 'naterip-theme';

  let overrides: Record<string, string> = $state({});
  let openSections: Record<string, boolean> = $state({
    colors: true,
    typography: false,
    spacing: false,
    corners: false,
    shadows: false,
    transitions: false,
    experimental: false,
  });

  // Restore from localStorage on mount
  $effect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        overrides = parsed;
        for (const [k, v] of Object.entries(parsed)) {
          document.documentElement.style.setProperty(k, v as string);
        }
      }
    } catch {}
  });

  // Save to localStorage whenever overrides change
  // Use a separate effect that doesn't run on first mount
  let initialized = false;
  $effect(() => {
    // Access overrides to track it
    const _ = JSON.stringify(overrides);
    if (!initialized) { initialized = true; return; }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  });

  function set(prop: string, value: string) {
    overrides[prop] = value;
    document.documentElement.style.setProperty(prop, value);
  }

  function reset() {
    for (const k of Object.keys(overrides)) {
      document.documentElement.style.removeProperty(k);
    }
    overrides = {};
    localStorage.removeItem(STORAGE_KEY);
  }

  let exportLabel = $state('Export');

  function exportCSS() {
    const lines = Object.entries(overrides)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n');
    const css = `:root {\n${lines}\n}`;
    navigator.clipboard.writeText(css);
    exportLabel = 'Copied!';
    setTimeout(() => exportLabel = 'Export', 1500);
  }

  function toggle(section: string) {
    openSections[section] = !openSections[section];
  }

  let { onclose }: { onclose?: () => void } = $props();
</script>

<aside class="panel">
  <header class="panel-header">
    <span class="panel-title">Theme Editor</span>
    <div class="panel-actions">
      <button onclick={exportCSS}>{exportLabel}</button>
      <button onclick={reset}>Reset</button>
      <button onclick={onclose}>&times;</button>
    </div>
  </header>

  <div class="panel-body">
    <section class="section">
      <button class="section-toggle" onclick={() => toggle('colors')}>
        <span class="section-arrow" class:open={openSections.colors}>&#9654;</span>
        Colors
      </button>
      {#if openSections.colors}
        <div class="section-content">
          <ColorEditor {set} {overrides} />
        </div>
      {/if}
    </section>

    <section class="section">
      <button class="section-toggle" onclick={() => toggle('typography')}>
        <span class="section-arrow" class:open={openSections.typography}>&#9654;</span>
        Typography
      </button>
      {#if openSections.typography}
        <div class="section-content">
          <TypeEditor {set} {overrides} />
        </div>
      {/if}
    </section>

    <section class="section">
      <button class="section-toggle" onclick={() => toggle('spacing')}>
        <span class="section-arrow" class:open={openSections.spacing}>&#9654;</span>
        Spacing
      </button>
      {#if openSections.spacing}
        <div class="section-content">
          <SpacingEditor {set} {overrides} />
        </div>
      {/if}
    </section>

    <section class="section">
      <button class="section-toggle" onclick={() => toggle('corners')}>
        <span class="section-arrow" class:open={openSections.corners}>&#9654;</span>
        Corners &amp; Shapes
      </button>
      {#if openSections.corners}
        <div class="section-content">
          <CornerEditor {set} {overrides} />
        </div>
      {/if}
    </section>

    <section class="section">
      <button class="section-toggle" onclick={() => toggle('shadows')}>
        <span class="section-arrow" class:open={openSections.shadows}>&#9654;</span>
        Shadows
      </button>
      {#if openSections.shadows}
        <div class="section-content">
          <ShadowEditor {set} {overrides} />
        </div>
      {/if}
    </section>

    <section class="section">
      <button class="section-toggle" onclick={() => toggle('transitions')}>
        <span class="section-arrow" class:open={openSections.transitions}>&#9654;</span>
        Transitions
      </button>
      {#if openSections.transitions}
        <div class="section-content">
          <TransitionEditor {set} {overrides} />
        </div>
      {/if}
    </section>

    <section class="section">
      <button class="section-toggle" onclick={() => toggle('experimental')}>
        <span class="section-arrow" class:open={openSections.experimental}>&#9654;</span>
        Experimental
      </button>
      {#if openSections.experimental}
        <div class="section-content">
          <ExperimentalEditor {set} {overrides} />
        </div>
      {/if}
    </section>
  </div>
</aside>

<style>
  .panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 320px;
    height: 100vh;
    background: #1a1a1a;
    color: #ddd;
    border-left: 1px solid #333;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    font-family: system-ui, sans-serif;
    font-size: 12px;
  }
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid #333;
    flex-shrink: 0;
  }
  .panel-title { font-weight: 600; font-size: 13px; }
  .panel-actions { display: flex; gap: 6px; }
  .panel-actions button {
    background: #2a2a2a;
    color: #ddd;
    border: 1px solid #444;
    padding: 2px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  }
  .panel-actions button:hover { background: #333; }
  .panel-body {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;
  }
  .section { border-bottom: 1px solid #2a2a2a; }
  .section-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 8px 12px;
    background: none;
    color: #ddd;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
  }
  .section-toggle:hover { background: #222; }
  .section-arrow {
    font-size: 8px;
    transition: transform 0.15s;
    display: inline-block;
  }
  .section-arrow.open { transform: rotate(90deg); }
  .section-content { padding: 4px 12px 12px; }
</style>
