<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  const RATIOS: { label: string; value: number }[] = [
    { label: 'Minor second (1.067)', value: 1.067 },
    { label: 'Major second (1.125)', value: 1.125 },
    { label: 'Minor third (1.2)', value: 1.2 },
    { label: 'Major third (1.25)', value: 1.25 },
    { label: 'Perfect fourth (1.333)', value: 1.333 },
    { label: 'Golden ratio (1.618)', value: 1.618 },
  ];

  const STEP_NAMES = ['--fs-xs', '--fs-s', '--fs', '--fs-l', '--fs-xl', '--fs-2xl', '--fs-3xl'];
  const TEXT_WRAP_OPTIONS = ['auto', 'balance', 'pretty', 'stable'];

  let base = $state(13);
  let ratioIndex = $state(2); // minor third
  let steps = $state(3);
  let lineHeight = $state(1.4);
  let textWrap = $state('auto');

  let ratio = $derived(RATIOS[ratioIndex].value);

  // Generate scale: step 0 = base, negative steps go smaller, positive go larger
  // With 3 steps: step -1 (small), step 0 (base), step 1 (large)
  // With 4 steps: step -1 (xs), step 0 (s), step 1 (base), step 2 (large)
  // We center around step 0 = base, with floor(steps/2) below and the rest above
  let scale = $derived.by(() => {
    const below = Math.floor((steps - 1) / 2);
    const result: { name: string; step: number; value: number }[] = [];
    for (let i = 0; i < steps; i++) {
      const stepNum = i - below;
      const value = Math.round(base * Math.pow(ratio, stepNum) * 100) / 100;
      // Map to variable names: center index gets --fs, below get --fs-s/--fs-xs, above get --fs-l/--fs-xl
      const nameIndex = below + 1 + (i - below); // offset into STEP_NAMES centered at index below+1 -> no
      result.push({ name: STEP_NAMES[i] || `--fs-${i}`, step: stepNum, value });
    }
    return result;
  });

  // Map steps to the proper CSS variable names
  let scaleMap = $derived.by(() => {
    const below = Math.floor((steps - 1) / 2);
    const entries: { name: string; step: number; value: number; px: string }[] = [];
    for (let i = 0; i < steps; i++) {
      const stepNum = i - below;
      const value = Math.round(base * Math.pow(ratio, stepNum) * 100) / 100;
      // Name mapping: the middle is --fs, below are --fs-s, --fs-xs, above are --fs-l, --fs-xl, --fs-2xl
      let name: string;
      if (stepNum === 0) name = '--fs';
      else if (stepNum === -1) name = '--fs-s';
      else if (stepNum === -2) name = '--fs-xs';
      else if (stepNum === -3) name = '--fs-2xs';
      else if (stepNum === 1) name = '--fs-l';
      else if (stepNum === 2) name = '--fs-xl';
      else if (stepNum === 3) name = '--fs-2xl';
      else name = `--fs-${stepNum > 0 ? '+' : ''}${stepNum}`;
      entries.push({ name, step: stepNum, value, px: `${value}px` });
    }
    return entries;
  });

  // Apply scale whenever inputs change
  $effect(() => {
    for (const entry of scaleMap) {
      set(entry.name, entry.px);
    }
  });

  // Apply line height
  $effect(() => {
    set('--lh', String(lineHeight));
  });

  function handleTextWrap(value: string) {
    textWrap = value;
    set('--text-wrap', value);
    document.body.style.textWrap = value;
  }

  function handleBaseChange(e: Event) {
    base = Number((e.target as HTMLInputElement).value);
  }

  function handleRatioChange(e: Event) {
    ratioIndex = Number((e.target as HTMLSelectElement).value);
  }

  function handleStepsChange(e: Event) {
    steps = Number((e.target as HTMLInputElement).value);
  }

  function handleLineHeightChange(e: Event) {
    lineHeight = Number((e.target as HTMLInputElement).value);
  }
</script>

<div class="editor">
  <!-- Base size -->
  <div class="row">
    <label class="label">Base size</label>
    <input
      type="number"
      min="8"
      max="24"
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

  <!-- Steps -->
  <div class="row">
    <label class="label">Steps</label>
    <input
      type="range"
      min="2"
      max="6"
      step="1"
      value={steps}
      oninput={handleStepsChange}
      class="range-input"
    />
    <span class="val">{steps}</span>
  </div>

  <!-- Scale preview -->
  <div class="scale-preview">
    <label class="label">Scale</label>
    <div class="scale-values">
      {#each scaleMap as entry}
        <div class="scale-entry">
          <span class="scale-name">{entry.name}</span>
          <span class="scale-px">{entry.px}</span>
          <span class="scale-step">({entry.step > 0 ? '+' : ''}{entry.step})</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Line height -->
  <div class="row">
    <label class="label">Line height</label>
    <input
      type="range"
      min="1.0"
      max="2.0"
      step="0.05"
      value={lineHeight}
      oninput={handleLineHeightChange}
      class="range-input"
    />
    <span class="val">{lineHeight.toFixed(2)}</span>
  </div>

  <!-- Text wrap -->
  <div class="row">
    <label class="label">text-wrap</label>
    <div class="wrap-btns">
      {#each TEXT_WRAP_OPTIONS as opt}
        <button
          class="wrap-btn"
          class:active={textWrap === opt}
          onclick={() => handleTextWrap(opt)}
        >{opt}</button>
      {/each}
    </div>
  </div>

  <!-- Type specimen -->
  <div class="specimen">
    <label class="label">Specimen</label>
    <div class="specimen-samples">
      {#each scaleMap as entry}
        <div class="specimen-line" style="font-size: {entry.px}; line-height: {lineHeight};">
          <span class="specimen-label">{entry.name}</span>
          The quick brown fox
        </div>
      {/each}
    </div>
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

  .range-input {
    flex: 1;
    accent-color: #5b9aff;
    height: 12px;
  }

  .val {
    font-size: 11px;
    color: #777;
    width: 32px;
    text-align: right;
    font-family: ui-monospace, monospace;
    flex-shrink: 0;
  }

  .scale-preview {
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 3px;
    padding: 8px;
    margin-bottom: 4px;
  }
  .scale-values { margin-top: 4px; }
  .scale-entry {
    display: flex;
    gap: 8px;
    align-items: baseline;
    padding: 2px 0;
    font-size: 11px;
  }
  .scale-name {
    color: #5b9aff;
    font-family: ui-monospace, monospace;
    width: 60px;
    flex-shrink: 0;
  }
  .scale-px {
    color: #ddd;
    font-family: ui-monospace, monospace;
    width: 48px;
    text-align: right;
  }
  .scale-step { color: #555; font-size: 10px; }

  .wrap-btns { display: flex; gap: 4px; flex-wrap: wrap; }
  .wrap-btn {
    background: #2a2a2a;
    color: #ddd;
    border: 1px solid #444;
    padding: 2px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  }
  .wrap-btn:hover { background: #333; }
  .wrap-btn.active { border-color: #5b9aff; color: #5b9aff; }

  .specimen {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #2a2a2a;
  }
  .specimen-samples { margin-top: 6px; display: flex; flex-direction: column; gap: 4px; }
  .specimen-line {
    color: #ddd;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .specimen-label {
    color: #555;
    font-size: 9px;
    font-family: ui-monospace, monospace;
    margin-right: 6px;
    vertical-align: middle;
  }
</style>
