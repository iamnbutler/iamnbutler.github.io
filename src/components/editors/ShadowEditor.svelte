<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  interface ShadowLayer {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: string;
    opacity: number;
  }

  function makeLayer(x = 0, y = 2, blur = 4, spread = 0, color = '#000000', opacity = 0.1): ShadowLayer {
    return { x, y, blur, spread, color, opacity };
  }

  let layers: ShadowLayer[] = $state([makeLayer()]);
  let useDropShadow = $state(false);

  let composedShadow = $derived(() => {
    if (layers.length === 0) return 'none';
    return layers.map(l => {
      const r = parseInt(l.color.slice(1, 3), 16);
      const g = parseInt(l.color.slice(3, 5), 16);
      const b = parseInt(l.color.slice(5, 7), 16);
      return `${l.x}px ${l.y}px ${l.blur}px ${l.spread}px rgba(${r},${g},${b},${l.opacity})`;
    }).join(', ');
  });

  let composedDropShadow = $derived(() => {
    if (layers.length === 0) return 'none';
    return layers.map(l => {
      const r = parseInt(l.color.slice(1, 3), 16);
      const g = parseInt(l.color.slice(3, 5), 16);
      const b = parseInt(l.color.slice(5, 7), 16);
      return `drop-shadow(${l.x}px ${l.y}px ${l.blur}px rgba(${r},${g},${b},${l.opacity}))`;
    }).join(' ');
  });

  // Push composed value to CSS variable whenever layers change
  $effect(() => {
    const val = composedShadow();
    set('--shadow', val);
    if (useDropShadow) {
      document.documentElement.style.setProperty('filter', composedDropShadow());
    } else {
      document.documentElement.style.removeProperty('filter');
    }
  });

  function addLayer() {
    layers.push(makeLayer());
  }

  function removeLayer(index: number) {
    layers.splice(index, 1);
  }

  const elevationPresets: Record<number, ShadowLayer[]> = {
    0: [],
    1: [makeLayer(0, 1, 2, 0, '#000000', 0.1)],
    2: [makeLayer(0, 2, 4, 0, '#000000', 0.1), makeLayer(0, 1, 2, 0, '#000000', 0.06)],
    3: [makeLayer(0, 4, 8, 0, '#000000', 0.12), makeLayer(0, 2, 4, 0, '#000000', 0.08)],
    4: [makeLayer(0, 8, 16, 0, '#000000', 0.15), makeLayer(0, 4, 8, 0, '#000000', 0.1)],
  };

  function applyElevation(level: number) {
    layers = elevationPresets[level].map(l => ({ ...l }));
  }

  function updateLayer(index: number, field: keyof ShadowLayer, value: number | string) {
    if (field === 'color') {
      layers[index].color = value as string;
    } else if (field === 'opacity') {
      layers[index].opacity = value as number;
    } else {
      (layers[index] as any)[field] = value as number;
    }
  }
</script>

<div class="editor">
  <!-- Elevation presets -->
  <div class="row">
    <label class="label">Elevation presets</label>
  </div>
  <div class="row">
    {#each [0, 1, 2, 3, 4] as level}
      <button class="preset-btn" onclick={() => applyElevation(level)}>
        {level}
      </button>
    {/each}
  </div>

  <!-- Shadow layers -->
  <div class="row" style="margin-top: 8px;">
    <label class="label">Layers ({layers.length})</label>
    <button class="add-btn" onclick={addLayer}>+ Add</button>
  </div>

  {#each layers as layer, i}
    <div class="layer">
      <div class="layer-header">
        <span class="layer-label">Layer {i + 1}</span>
        <button class="remove-btn" onclick={() => removeLayer(i)}>x</button>
      </div>

      <div class="row">
        <label class="label">X</label>
        <input
          type="range"
          class="range-sm"
          min="-20"
          max="20"
          value={layer.x}
          oninput={(e) => updateLayer(i, 'x', parseInt((e.target as HTMLInputElement).value))}
        />
        <span class="value">{layer.x}</span>
      </div>

      <div class="row">
        <label class="label">Y</label>
        <input
          type="range"
          class="range-sm"
          min="-20"
          max="20"
          value={layer.y}
          oninput={(e) => updateLayer(i, 'y', parseInt((e.target as HTMLInputElement).value))}
        />
        <span class="value">{layer.y}</span>
      </div>

      <div class="row">
        <label class="label">Blur</label>
        <input
          type="range"
          class="range-sm"
          min="0"
          max="60"
          value={layer.blur}
          oninput={(e) => updateLayer(i, 'blur', parseInt((e.target as HTMLInputElement).value))}
        />
        <span class="value">{layer.blur}</span>
      </div>

      <div class="row">
        <label class="label">Spread</label>
        <input
          type="range"
          class="range-sm"
          min="-20"
          max="20"
          value={layer.spread}
          oninput={(e) => updateLayer(i, 'spread', parseInt((e.target as HTMLInputElement).value))}
        />
        <span class="value">{layer.spread}</span>
      </div>

      <div class="row">
        <label class="label">Color</label>
        <input
          type="color"
          class="color-input"
          value={layer.color}
          oninput={(e) => updateLayer(i, 'color', (e.target as HTMLInputElement).value)}
        />
        <input
          type="text"
          class="text-input"
          value={layer.color}
          oninput={(e) => updateLayer(i, 'color', (e.target as HTMLInputElement).value)}
        />
      </div>

      <div class="row">
        <label class="label">Opacity</label>
        <input
          type="range"
          class="range-sm"
          min="0"
          max="1"
          step="0.01"
          value={layer.opacity}
          oninput={(e) => updateLayer(i, 'opacity', parseFloat((e.target as HTMLInputElement).value))}
        />
        <span class="value">{layer.opacity.toFixed(2)}</span>
      </div>
    </div>
  {/each}

  <!-- Drop shadow toggle -->
  <div class="row" style="margin-top: 8px;">
    <label class="label">
      <input
        type="checkbox"
        checked={useDropShadow}
        onchange={(e) => {
          useDropShadow = (e.target as HTMLInputElement).checked;
          if (!useDropShadow) {
            document.documentElement.style.removeProperty('filter');
          }
        }}
      />
      Also apply as <code>filter: drop-shadow()</code>
    </label>
  </div>

  <!-- Composed output -->
  <div class="row" style="margin-top: 8px;">
    <label class="label">Composed value</label>
  </div>
  <div class="output">{composedShadow()}</div>

  <!-- Preview -->
  <div class="row" style="margin-top: 8px;">
    <label class="label">Preview</label>
  </div>
  <div class="preview-container">
    <div
      class="preview-box"
      style="box-shadow: {composedShadow()}; {useDropShadow ? 'filter: ' + composedDropShadow() + ';' : ''}"
    ></div>
  </div>
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
    white-space: nowrap;
  }

  .label code {
    font-family: ui-monospace, 'SF Mono', monospace;
    font-size: 10px;
  }

  .value {
    font-size: 11px;
    color: #ddd;
    font-family: ui-monospace, 'SF Mono', monospace;
    min-width: 28px;
    text-align: right;
  }

  .preset-btn {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 10px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  }
  .preset-btn:hover { background: #333; }

  .add-btn {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #5b9aff;
    padding: 1px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
    margin-left: auto;
  }
  .add-btn:hover { background: #333; }

  .layer {
    background: #222;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 6px 8px;
    margin-bottom: 6px;
  }

  .layer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .layer-label {
    font-size: 11px;
    color: #bbb;
    font-weight: 600;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #f55;
    font-size: 11px;
    cursor: pointer;
    padding: 0 4px;
  }
  .remove-btn:hover { color: #f88; }

  .range-sm {
    flex: 1;
    accent-color: #5b9aff;
  }

  .color-input {
    width: 24px;
    height: 20px;
    padding: 0;
    border: 1px solid #444;
    background: none;
    cursor: pointer;
  }

  .text-input {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 6px;
    font-size: 11px;
    font-family: ui-monospace, 'SF Mono', monospace;
    width: 70px;
  }

  .output {
    font-size: 10px;
    color: #888;
    font-family: ui-monospace, 'SF Mono', monospace;
    background: #222;
    padding: 4px 6px;
    border-radius: 3px;
    word-break: break-all;
    margin-bottom: 6px;
  }

  .preview-container {
    display: flex;
    justify-content: center;
    padding: 16px;
    background: #222;
    border-radius: 4px;
    margin-bottom: 6px;
  }

  .preview-box {
    width: 80px;
    height: 80px;
    background: #333;
    border-radius: 4px;
  }
</style>
