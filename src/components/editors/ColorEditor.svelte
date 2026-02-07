<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  const COLOR_VARS = ['--bg', '--fg', '--fg-2', '--border', '--accent', '--surface'] as const;

  type ColorState = { hex: string; l: number; c: number; h: number };

  let colors: Record<string, ColorState> = $state({});
  let colorScheme: string = $state('auto');

  // Initialize color states from computed styles or overrides
  $effect(() => {
    const style = getComputedStyle(document.documentElement);
    const initial: Record<string, ColorState> = {};
    for (const v of COLOR_VARS) {
      const current = overrides[v] || style.getPropertyValue(v).trim();
      initial[v] = { hex: normalizeToHex(current), l: 50, c: 0.1, h: 200 };
    }
    colors = initial;
  });

  function normalizeToHex(value: string): string {
    if (value.startsWith('#')) return value.length === 4 ? expandShortHex(value) : value;
    // Use a temporary element to resolve CSS colors to hex
    const el = document.createElement('div');
    el.style.color = value;
    document.body.appendChild(el);
    const computed = getComputedStyle(el).color;
    document.body.removeChild(el);
    const match = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const [, r, g, b] = match;
      return '#' + [r, g, b].map(c => Number(c).toString(16).padStart(2, '0')).join('');
    }
    return '#888888';
  }

  function expandShortHex(hex: string): string {
    return '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  function oklchToHex(l: number, c: number, h: number): string {
    // Convert oklch percentage (0-100) to 0-1 range for L
    const L = l / 100;
    // oklch -> oklab
    const a = c * Math.cos(h * Math.PI / 180);
    const b = c * Math.sin(h * Math.PI / 180);
    // oklab -> linear sRGB
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 0.1314020226 * b;
    const lr = l_ * l_ * l_;
    const mr = m_ * m_ * m_;
    const sr = s_ * s_ * s_;
    // Linear sRGB -> sRGB matrix
    let R = +4.0767416621 * lr - 3.3077115913 * mr + 0.2309699292 * sr;
    let G = -1.2684380046 * lr + 2.6097574011 * mr - 0.3413193965 * sr;
    let B = -0.0041960863 * lr - 0.7034186147 * mr + 1.7076147010 * sr;
    // Gamma correction
    R = R > 0.0031308 ? 1.055 * Math.pow(R, 1 / 2.4) - 0.055 : 12.92 * R;
    G = G > 0.0031308 ? 1.055 * Math.pow(G, 1 / 2.4) - 0.055 : 12.92 * G;
    B = B > 0.0031308 ? 1.055 * Math.pow(B, 1 / 2.4) - 0.055 : 12.92 * B;
    // Clamp and convert
    const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v * 255)));
    return '#' + [clamp(R), clamp(G), clamp(B)].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  function handleHexChange(varName: string, hex: string) {
    if (colors[varName]) {
      colors[varName].hex = hex;
    }
    set(varName, hex);
  }

  function handleOklchChange(varName: string, component: 'l' | 'c' | 'h', value: number) {
    if (!colors[varName]) return;
    colors[varName][component] = value;
    const { l, c, h } = colors[varName];
    const hex = oklchToHex(l, c, h);
    colors[varName].hex = hex;
    set(varName, hex);
  }

  function setColorScheme(scheme: string) {
    colorScheme = scheme;
    if (scheme === 'auto') {
      document.documentElement.style.removeProperty('color-scheme');
    } else {
      document.documentElement.style.colorScheme = scheme;
    }
  }

  let mixPreview = $derived(() => {
    const accent = overrides['--accent'] || '#5b9aff';
    const bg = overrides['--bg'] || '#111';
    return `color-mix(in oklch, ${accent} 50%, ${bg})`;
  });
</script>

<div class="editor">
  <!-- Color scheme toggle -->
  <div class="row">
    <label class="label">color-scheme</label>
    <div class="scheme-btns">
      {#each ['light', 'dark', 'auto'] as scheme}
        <button
          class="scheme-btn"
          class:active={colorScheme === scheme}
          onclick={() => setColorScheme(scheme)}
        >{scheme}</button>
      {/each}
    </div>
  </div>

  <!-- Color variables -->
  {#each COLOR_VARS as varName}
    {@const c = colors[varName]}
    {#if c}
      <div class="color-group">
        <div class="row">
          <span class="swatch" style="background: {c.hex}"></span>
          <label class="label var-name">{varName}</label>
          <input
            type="color"
            value={c.hex}
            oninput={(e: Event) => handleHexChange(varName, (e.target as HTMLInputElement).value)}
            class="color-input"
          />
          <span class="hex-label">{c.hex}</span>
        </div>
        <div class="sliders">
          <div class="slider-row">
            <label class="label">L</label>
            <input type="range" min="0" max="100" step="1"
              value={c.l}
              oninput={(e: Event) => handleOklchChange(varName, 'l', Number((e.target as HTMLInputElement).value))}
            />
            <span class="val">{c.l}</span>
          </div>
          <div class="slider-row">
            <label class="label">C</label>
            <input type="range" min="0" max="0.4" step="0.005"
              value={c.c}
              oninput={(e: Event) => handleOklchChange(varName, 'c', Number((e.target as HTMLInputElement).value))}
            />
            <span class="val">{c.c.toFixed(3)}</span>
          </div>
          <div class="slider-row">
            <label class="label">H</label>
            <input type="range" min="0" max="360" step="1"
              value={c.h}
              oninput={(e: Event) => handleOklchChange(varName, 'h', Number((e.target as HTMLInputElement).value))}
            />
            <span class="val">{c.h}</span>
          </div>
        </div>
      </div>
    {/if}
  {/each}

  <!-- Color mix preview -->
  <div class="mix-preview">
    <label class="label">color-mix preview</label>
    <div class="mix-row">
      <span class="swatch" style="background: {overrides['--accent'] || '#5b9aff'}"></span>
      <span class="mix-label">50%</span>
      <span class="swatch" style="background: {overrides['--bg'] || '#111'}"></span>
      <span class="mix-label">=</span>
      <span class="swatch large" style="background: {mixPreview()}"></span>
    </div>
    <code class="mix-code">{mixPreview()}</code>
  </div>
</div>

<style>
  .editor { display: flex; flex-direction: column; gap: 8px; }
  .row { display: flex; gap: 8px; align-items: center; margin-bottom: 6px; }
  .label { font-size: 11px; color: #999; }
  .var-name { flex: 1; font-family: ui-monospace, monospace; }
  .hex-label { font-size: 11px; color: #999; font-family: ui-monospace, monospace; width: 60px; }

  .swatch {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #444;
    flex-shrink: 0;
  }
  .swatch.large { width: 24px; height: 24px; }

  .color-input {
    width: 24px;
    height: 20px;
    padding: 0;
    border: 1px solid #444;
    background: #2a2a2a;
    cursor: pointer;
    flex-shrink: 0;
  }

  .color-group {
    border-bottom: 1px solid #2a2a2a;
    padding-bottom: 8px;
    margin-bottom: 4px;
  }

  .sliders { padding-left: 24px; }
  .slider-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 2px;
  }
  .slider-row .label { width: 12px; text-align: right; }
  .slider-row input[type="range"] {
    flex: 1;
    accent-color: #5b9aff;
    height: 12px;
  }
  .val {
    font-size: 10px;
    color: #777;
    width: 36px;
    text-align: right;
    font-family: ui-monospace, monospace;
  }

  .scheme-btns { display: flex; gap: 4px; }
  .scheme-btn {
    background: #2a2a2a;
    color: #ddd;
    border: 1px solid #444;
    padding: 2px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  }
  .scheme-btn:hover { background: #333; }
  .scheme-btn.active { border-color: #5b9aff; color: #5b9aff; }

  .mix-preview {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #2a2a2a;
  }
  .mix-row { display: flex; gap: 6px; align-items: center; margin: 6px 0; }
  .mix-label { font-size: 10px; color: #777; }
  .mix-code {
    font-size: 10px;
    color: #666;
    font-family: ui-monospace, monospace;
    display: block;
    word-break: break-all;
  }
</style>
