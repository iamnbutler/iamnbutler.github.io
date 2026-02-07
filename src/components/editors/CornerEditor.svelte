<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  let showPerCorner = $state(false);

  let radius = $derived(parseInt(overrides['--r'] ?? '0'));
  let bss = $derived(parseInt(overrides['--r-start-start'] ?? '0'));
  let bse = $derived(parseInt(overrides['--r-start-end'] ?? '0'));
  let bes = $derived(parseInt(overrides['--r-end-start'] ?? '0'));
  let bee = $derived(parseInt(overrides['--r-end-end'] ?? '0'));

  let cornerShape = $state('round');
  let borderShapeText = $state('');

  let previewRadiusStyle = $derived(() => {
    if (showPerCorner) {
      return `border-start-start-radius: ${bss}px; border-start-end-radius: ${bse}px; border-end-start-radius: ${bes}px; border-end-end-radius: ${bee}px;`;
    }
    return `border-radius: ${radius}px;`;
  });

  function setRadius(val: string) {
    set('--r', val + 'px');
  }

  function setCorner(prop: string, cssVar: string, val: string) {
    set(cssVar, val + 'px');
  }

  function setCornerShape(val: string) {
    cornerShape = val;
    document.documentElement.style.setProperty('corner-shape', val);
  }

  function setBorderShape(val: string) {
    borderShapeText = val;
    if (val.trim()) {
      document.documentElement.style.setProperty('border-shape', val);
    } else {
      document.documentElement.style.removeProperty('border-shape');
    }
  }

  function applyBorderShapePreset(preset: string) {
    let value = '';
    if (preset === 'none') {
      value = '';
    } else if (preset === 'pill') {
      value = 'shape(from 0% 50%, curve to 50% 0% with 0% 0%, line to 50% 0%, curve to 100% 50% with 100% 0%, curve to 50% 100% with 100% 100%, line to 50% 100%, curve to 0% 50% with 0% 100%)';
    } else if (preset === 'squircle') {
      value = 'shape(from 0% 50%, curve to 50% 0% with 0% 18% / 18% 0%, line to 50% 0%, curve to 100% 50% with 82% 0% / 100% 18%, curve to 50% 100% with 100% 82% / 82% 100%, line to 50% 100%, curve to 0% 50% with 18% 100% / 0% 82%)';
    }
    setBorderShape(value);
  }
</script>

<div class="editor">
  <!-- Main border-radius -->
  <div class="row">
    <label class="label"><code>--r</code> border-radius</label>
    <span class="value">{radius}px</span>
  </div>
  <input
    type="range"
    class="range"
    min="0"
    max="32"
    value={radius}
    oninput={(e) => setRadius((e.target as HTMLInputElement).value)}
  />

  <!-- Per-corner overrides -->
  <button class="toggle-btn" onclick={() => showPerCorner = !showPerCorner}>
    {showPerCorner ? '- Hide' : '+ Show'} per-corner overrides
  </button>

  {#if showPerCorner}
    <div class="per-corner">
      <div class="row">
        <label class="label"><code>border-start-start-radius</code></label>
        <span class="value">{bss}px</span>
      </div>
      <input
        type="range"
        class="range"
        min="0"
        max="32"
        value={bss}
        oninput={(e) => setCorner('border-start-start-radius', '--r-start-start', (e.target as HTMLInputElement).value)}
      />

      <div class="row">
        <label class="label"><code>border-start-end-radius</code></label>
        <span class="value">{bse}px</span>
      </div>
      <input
        type="range"
        class="range"
        min="0"
        max="32"
        value={bse}
        oninput={(e) => setCorner('border-start-end-radius', '--r-start-end', (e.target as HTMLInputElement).value)}
      />

      <div class="row">
        <label class="label"><code>border-end-start-radius</code></label>
        <span class="value">{bes}px</span>
      </div>
      <input
        type="range"
        class="range"
        min="0"
        max="32"
        value={bes}
        oninput={(e) => setCorner('border-end-start-radius', '--r-end-start', (e.target as HTMLInputElement).value)}
      />

      <div class="row">
        <label class="label"><code>border-end-end-radius</code></label>
        <span class="value">{bee}px</span>
      </div>
      <input
        type="range"
        class="range"
        min="0"
        max="32"
        value={bee}
        oninput={(e) => setCorner('border-end-end-radius', '--r-end-end', (e.target as HTMLInputElement).value)}
      />
    </div>
  {/if}

  <!-- Corner shape -->
  <div class="row" style="margin-top: 8px;">
    <label class="label"><code>corner-shape</code> <span class="experimental">(experimental)</span></label>
  </div>
  <div class="row">
    {#each ['round', 'scoop', 'notch', 'bevel', 'squircle'] as shape}
      <button
        class="preset-btn"
        class:active={cornerShape === shape}
        onclick={() => setCornerShape(shape)}
      >
        {shape}
      </button>
    {/each}
  </div>

  <!-- Live preview for radius + corner-shape -->
  <div class="row" style="margin-top: 8px;">
    <label class="label">Preview</label>
  </div>
  <div class="preview-container">
    <div
      class="preview-box"
      style="{previewRadiusStyle()} corner-shape: {cornerShape};"
    ></div>
  </div>

  <!-- Border shape -->
  <div class="row" style="margin-top: 12px;">
    <label class="label"><code>border-shape</code> <span class="experimental">(Chrome Canary)</span></label>
  </div>
  <textarea
    class="textarea"
    rows="3"
    placeholder="shape(...) or none"
    value={borderShapeText}
    oninput={(e) => setBorderShape((e.target as HTMLTextAreaElement).value)}
  ></textarea>

  <div class="row" style="margin-top: 4px;">
    <label class="label">Presets</label>
  </div>
  <div class="row">
    {#each ['none', 'pill', 'squircle'] as preset}
      <button
        class="preset-btn"
        onclick={() => applyBorderShapePreset(preset)}
      >
        {preset}
      </button>
    {/each}
  </div>

  <!-- Border shape preview -->
  {#if borderShapeText.trim()}
    <div class="preview-container" style="margin-top: 6px;">
      <div
        class="preview-box"
        style="border-shape: {borderShapeText};"
      ></div>
    </div>
  {/if}
</div>

<style>
  .editor { display: flex; flex-direction: column; gap: 2px; }

  .row {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 6px;
  }

  .label {
    font-size: 11px;
    color: #999;
  }

  .label code {
    font-family: ui-monospace, 'SF Mono', monospace;
    font-size: 10px;
  }

  .value {
    font-size: 11px;
    color: #ddd;
    margin-left: auto;
    font-family: ui-monospace, 'SF Mono', monospace;
  }

  .range {
    width: 100%;
    accent-color: #5b9aff;
    margin-bottom: 6px;
  }

  .toggle-btn {
    background: none;
    border: none;
    color: #5b9aff;
    font-size: 11px;
    cursor: pointer;
    padding: 2px 0;
    text-align: left;
    margin-bottom: 6px;
  }
  .toggle-btn:hover { text-decoration: underline; }

  .per-corner {
    padding-left: 8px;
    border-left: 1px solid #333;
    margin-bottom: 6px;
  }

  .experimental {
    color: #888;
    font-style: italic;
    font-size: 10px;
  }

  .preset-btn {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  }
  .preset-btn:hover { background: #333; }
  .preset-btn.active {
    background: #5b9aff;
    color: #fff;
    border-color: #5b9aff;
  }

  .textarea {
    width: 100%;
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 4px 6px;
    font-size: 11px;
    font-family: ui-monospace, 'SF Mono', monospace;
    resize: vertical;
    margin-bottom: 6px;
  }

  .preview-container {
    display: flex;
    justify-content: center;
    padding: 8px;
    background: #222;
    border-radius: 4px;
    margin-bottom: 6px;
  }

  .preview-box {
    width: 80px;
    height: 80px;
    background: #5b9aff;
    border: 1px solid #888;
  }
</style>
