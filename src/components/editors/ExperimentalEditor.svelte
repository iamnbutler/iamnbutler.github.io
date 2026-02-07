<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  let scrollbarThumb = $state('#666666');
  let scrollbarTrack = $state('#1a1a1a');
  let accentColor = $state('#5b9aff');
  let fieldSizing = $state('fixed');
  let maxWidth = $derived(parseInt(overrides['--max-width'] ?? '640'));
  let contentVisibility = $state('visible');
  let textRendering = $state('auto');
  let fontSmoothing = $state('antialiased');

  function setScrollbarColor() {
    document.documentElement.style.setProperty('scrollbar-color', `${scrollbarThumb} ${scrollbarTrack}`);
  }

  function setAccentColor(val: string) {
    accentColor = val;
    document.documentElement.style.setProperty('accent-color', val);
  }

  function setFieldSizing(val: string) {
    fieldSizing = val;
    document.documentElement.style.setProperty('field-sizing', val);
  }

  function setMaxWidth(val: string) {
    set('--max-width', val + 'px');
  }

  function setContentVisibility(val: string) {
    contentVisibility = val;
    document.documentElement.style.setProperty('content-visibility', val);
  }

  function setTextRendering(val: string) {
    textRendering = val;
    document.documentElement.style.setProperty('text-rendering', val);
  }

  function setFontSmoothing(val: string) {
    fontSmoothing = val;
    if (val === 'auto') {
      document.documentElement.style.removeProperty('-webkit-font-smoothing');
      document.documentElement.style.removeProperty('-moz-osx-font-smoothing');
    } else if (val === 'antialiased') {
      document.documentElement.style.setProperty('-webkit-font-smoothing', 'antialiased');
      document.documentElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale');
    } else if (val === 'none') {
      document.documentElement.style.setProperty('-webkit-font-smoothing', 'none');
      document.documentElement.style.removeProperty('-moz-osx-font-smoothing');
    }
  }

  const textRenderingOptions = ['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision'];
  const fontSmoothingOptions = ['auto', 'antialiased', 'none'];
</script>

<div class="editor">
  <!-- scrollbar-color -->
  <div class="row">
    <label class="label"><code>scrollbar-color</code></label>
  </div>
  <div class="row">
    <label class="label">Thumb</label>
    <input
      type="color"
      class="color-input"
      value={scrollbarThumb}
      oninput={(e) => { scrollbarThumb = (e.target as HTMLInputElement).value; setScrollbarColor(); }}
    />
    <input
      type="text"
      class="text-input"
      value={scrollbarThumb}
      oninput={(e) => { scrollbarThumb = (e.target as HTMLInputElement).value; setScrollbarColor(); }}
    />
  </div>
  <div class="row">
    <label class="label">Track</label>
    <input
      type="color"
      class="color-input"
      value={scrollbarTrack}
      oninput={(e) => { scrollbarTrack = (e.target as HTMLInputElement).value; setScrollbarColor(); }}
    />
    <input
      type="text"
      class="text-input"
      value={scrollbarTrack}
      oninput={(e) => { scrollbarTrack = (e.target as HTMLInputElement).value; setScrollbarColor(); }}
    />
  </div>

  <div class="divider"></div>

  <!-- accent-color -->
  <div class="row">
    <label class="label"><code>accent-color</code></label>
  </div>
  <div class="row">
    <input
      type="color"
      class="color-input"
      value={accentColor}
      oninput={(e) => setAccentColor((e.target as HTMLInputElement).value)}
    />
    <input
      type="text"
      class="text-input"
      value={accentColor}
      oninput={(e) => setAccentColor((e.target as HTMLInputElement).value)}
    />
    <label class="label">Controls default accent for checkboxes, ranges, etc.</label>
  </div>

  <div class="divider"></div>

  <!-- field-sizing -->
  <div class="row">
    <label class="label"><code>field-sizing</code></label>
  </div>
  <div class="row">
    {#each ['fixed', 'content'] as opt}
      <button
        class="preset-btn"
        class:active={fieldSizing === opt}
        onclick={() => setFieldSizing(opt)}
      >
        {opt}
      </button>
    {/each}
    <label class="label">Auto-size inputs/textareas to content</label>
  </div>

  <div class="divider"></div>

  <!-- max-width -->
  <div class="row">
    <label class="label"><code>--max-width</code> body max-width</label>
    <span class="value">{maxWidth}px</span>
  </div>
  <input
    type="range"
    class="range"
    min="400"
    max="1200"
    value={maxWidth}
    oninput={(e) => setMaxWidth((e.target as HTMLInputElement).value)}
  />

  <div class="divider"></div>

  <!-- content-visibility -->
  <div class="row">
    <label class="label"><code>content-visibility</code></label>
  </div>
  <div class="row">
    {#each ['visible', 'auto'] as opt}
      <button
        class="preset-btn"
        class:active={contentVisibility === opt}
        onclick={() => setContentVisibility(opt)}
      >
        {opt}
      </button>
    {/each}
    <label class="label">Skip rendering off-screen content</label>
  </div>

  <div class="divider"></div>

  <!-- text-rendering -->
  <div class="row">
    <label class="label"><code>text-rendering</code></label>
  </div>
  <div class="row" style="flex-wrap: wrap;">
    {#each textRenderingOptions as opt}
      <button
        class="preset-btn"
        class:active={textRendering === opt}
        onclick={() => setTextRendering(opt)}
      >
        {opt}
      </button>
    {/each}
  </div>

  <div class="divider"></div>

  <!-- font-smoothing -->
  <div class="row">
    <label class="label"><code>-webkit-font-smoothing</code></label>
  </div>
  <div class="row">
    {#each fontSmoothingOptions as opt}
      <button
        class="preset-btn"
        class:active={fontSmoothing === opt}
        onclick={() => setFontSmoothing(opt)}
      >
        {opt}
      </button>
    {/each}
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

  .color-input {
    width: 24px;
    height: 20px;
    padding: 0;
    border: 1px solid #444;
    background: none;
    cursor: pointer;
    flex-shrink: 0;
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

  .preset-btn {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
    white-space: nowrap;
  }
  .preset-btn:hover { background: #333; }
  .preset-btn.active {
    background: #5b9aff;
    color: #fff;
    border-color: #5b9aff;
  }

  .divider {
    border-top: 1px solid #2a2a2a;
    margin: 6px 0;
  }
</style>
