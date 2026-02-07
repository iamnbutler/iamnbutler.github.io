<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  const RATIOS: { label: string; value: number }[] = [
    { label: 'Minor second (1.067)', value: 1.067 },
    { label: 'Major second (1.125)', value: 1.125 },
    { label: 'Minor third (1.2)', value: 1.2 },
    { label: 'Major third (1.25)', value: 1.25 },
    { label: 'Perfect fourth (1.333)', value: 1.333 },
    { label: 'Golden ratio (1.618)', value: 1.618 },
    { label: 'Doubling (2.0)', value: 2.0 },
  ];

  const SPACING_VARS = ['--sp', '--sp-2', '--sp-3', '--sp-4'] as const;

  let base = $state(4);
  let ratioIndex = $state(6); // doubling (2.0) as default

  let ratio = $derived(RATIOS[ratioIndex].value);

  let spacingScale = $derived.by(() => {
    return SPACING_VARS.map((name, i) => {
      const value = Math.round(base * Math.pow(ratio, i) * 100) / 100;
      return { name, value, px: `${value}px` };
    });
  });

  // The largest value in the scale, used to normalize bar widths
  let maxValue = $derived(Math.max(...spacingScale.map(s => s.value)));

  // Apply spacing whenever inputs change
  $effect(() => {
    for (const entry of spacingScale) {
      set(entry.name, entry.px);
    }
  });

  function handleBaseChange(e: Event) {
    base = Number((e.target as HTMLInputElement).value);
  }

  function handleRatioChange(e: Event) {
    ratioIndex = Number((e.target as HTMLSelectElement).value);
  }
</script>

<div class="editor">
  <!-- Base unit -->
  <div class="row">
    <label class="label">Base unit</label>
    <input
      type="number"
      min="1"
      max="16"
      value={base}
      oninput={handleBaseChange}
      class="input num-input"
    />
    <span class="unit">px</span>
  </div>

  <!-- Scale ratio -->
  <div class="row">
    <label class="label">Ratio</label>
    <select value={ratioIndex} onchange={handleRatioChange} class="input select-input">
      {#each RATIOS as r, i}
        <option value={i}>{r.label}</option>
      {/each}
    </select>
  </div>

  <!-- Spacing bars preview -->
  <div class="bars-preview">
    <label class="label">Scale</label>
    <div class="bars">
      {#each spacingScale as entry}
        <div class="bar-row">
          <span class="bar-name">{entry.name}</span>
          <div class="bar-track">
            <div
              class="bar-fill"
              style="width: {maxValue > 0 ? (entry.value / maxValue) * 100 : 0}%"
            ></div>
          </div>
          <span class="bar-value">{entry.px}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Numeric summary -->
  <div class="summary">
    {#each spacingScale as entry}
      <div class="summary-row">
        <code class="summary-name">{entry.name}</code>
        <span class="summary-val">{entry.value}px</span>
        {#if entry.name !== '--sp'}
          <span class="summary-mult">{(entry.value / base).toFixed(2)}x</span>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .editor { display: flex; flex-direction: column; gap: 8px; }
  .row { display: flex; gap: 8px; align-items: center; margin-bottom: 6px; }
  .label { font-size: 11px; color: #999; flex-shrink: 0; }
  .unit { font-size: 11px; color: #777; }

  .input {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 6px;
    font-size: 11px;
    border-radius: 3px;
  }

  .num-input { width: 52px; }
  .select-input { flex: 1; padding: 3px 4px; }

  .bars-preview {
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 3px;
    padding: 8px;
  }

  .bars { margin-top: 6px; display: flex; flex-direction: column; gap: 6px; }

  .bar-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bar-name {
    font-size: 11px;
    color: #5b9aff;
    font-family: ui-monospace, monospace;
    width: 48px;
    flex-shrink: 0;
  }

  .bar-track {
    flex: 1;
    height: 14px;
    background: #252525;
    border-radius: 2px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: #5b9aff;
    border-radius: 2px;
    transition: width 0.15s ease;
    min-width: 2px;
  }

  .bar-value {
    font-size: 11px;
    color: #999;
    font-family: ui-monospace, monospace;
    width: 48px;
    text-align: right;
    flex-shrink: 0;
  }

  .summary {
    margin-top: 4px;
    padding-top: 8px;
    border-top: 1px solid #2a2a2a;
  }

  .summary-row {
    display: flex;
    gap: 8px;
    align-items: baseline;
    padding: 1px 0;
    font-size: 11px;
  }

  .summary-name {
    color: #888;
    font-family: ui-monospace, monospace;
    font-size: 11px;
    width: 48px;
    flex-shrink: 0;
  }

  .summary-val {
    color: #ddd;
    font-family: ui-monospace, monospace;
    width: 48px;
    text-align: right;
  }

  .summary-mult {
    color: #555;
    font-size: 10px;
  }
</style>
