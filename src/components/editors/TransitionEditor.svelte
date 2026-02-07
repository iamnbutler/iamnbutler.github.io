<script lang="ts">
  let { set, overrides }: { set: (prop: string, value: string) => void; overrides: Record<string, string> } = $props();

  let duration = $derived(parseInt(overrides['--transition-duration'] ?? '150'));
  let timingFunction = $state('ease');
  let isCustomTiming = $derived(timingFunction === 'custom');

  let x1 = $state(0.25);
  let y1 = $state(0.1);
  let x2 = $state(0.25);
  let y2 = $state(1.0);

  let composedTiming = $derived(() => {
    if (isCustomTiming) {
      return `cubic-bezier(${x1},${y1},${x2},${y2})`;
    }
    return timingFunction;
  });

  let startingStyleEnabled = $state(false);
  let animationTimeline = $state('none');

  let testAnimating = $state(false);

  // Apply duration changes
  function setDuration(val: string) {
    set('--transition-duration', val + 'ms');
  }

  // Apply timing function changes
  $effect(() => {
    const val = composedTiming();
    set('--transition-timing', val);
  });

  function setTimingPreset(val: string) {
    timingFunction = val;
  }

  function setAnimTimeline(val: string) {
    animationTimeline = val;
    if (val === 'none') {
      document.documentElement.style.removeProperty('animation-timeline');
    } else {
      document.documentElement.style.setProperty('animation-timeline', val);
    }
  }

  function triggerTest() {
    testAnimating = false;
    // Force reflow to restart animation
    requestAnimationFrame(() => {
      testAnimating = true;
    });
  }

  const timingOptions = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'custom'];
  const timelineOptions = ['none', 'scroll()', 'view()'];
</script>

<div class="editor">
  <!-- Duration -->
  <div class="row">
    <label class="label"><code>--transition-duration</code></label>
    <span class="value">{duration}ms</span>
  </div>
  <input
    type="range"
    class="range"
    min="0"
    max="1000"
    step="50"
    value={duration}
    oninput={(e) => setDuration((e.target as HTMLInputElement).value)}
  />

  <!-- Timing function -->
  <div class="row">
    <label class="label"><code>--transition-timing</code></label>
  </div>
  <div class="row" style="flex-wrap: wrap;">
    {#each timingOptions as opt}
      <button
        class="preset-btn"
        class:active={timingFunction === opt}
        onclick={() => setTimingPreset(opt)}
      >
        {opt}
      </button>
    {/each}
  </div>

  <!-- Custom cubic-bezier editor -->
  {#if isCustomTiming}
    <div class="cubic-editor">
      <div class="row">
        <label class="label">cubic-bezier({x1}, {y1}, {x2}, {y2})</label>
      </div>
      <div class="bezier-grid">
        <div class="bezier-field">
          <label class="label">x1</label>
          <input
            type="number"
            class="text-input"
            min="0"
            max="1"
            step="0.05"
            value={x1}
            oninput={(e) => x1 = parseFloat((e.target as HTMLInputElement).value) || 0}
          />
        </div>
        <div class="bezier-field">
          <label class="label">y1</label>
          <input
            type="number"
            class="text-input"
            min="0"
            max="1"
            step="0.05"
            value={y1}
            oninput={(e) => y1 = parseFloat((e.target as HTMLInputElement).value) || 0}
          />
        </div>
        <div class="bezier-field">
          <label class="label">x2</label>
          <input
            type="number"
            class="text-input"
            min="0"
            max="1"
            step="0.05"
            value={x2}
            oninput={(e) => x2 = parseFloat((e.target as HTMLInputElement).value) || 0}
          />
        </div>
        <div class="bezier-field">
          <label class="label">y2</label>
          <input
            type="number"
            class="text-input"
            min="0"
            max="1"
            step="0.05"
            value={y2}
            oninput={(e) => y2 = parseFloat((e.target as HTMLInputElement).value) || 0}
          />
        </div>
      </div>
    </div>
  {/if}

  <!-- Transition preview -->
  <div class="row" style="margin-top: 8px;">
    <label class="label">Preview (hover to animate)</label>
  </div>
  <div class="preview-track">
    <div
      class="preview-ball"
      style="transition-duration: {duration}ms; transition-timing-function: {composedTiming()};"
    ></div>
  </div>

  <!-- Test button -->
  <div class="row" style="margin-top: 6px;">
    <button class="test-btn" onclick={triggerTest}>Test animation</button>
  </div>
  <div class="test-track">
    <div
      class="test-ball"
      class:animating={testAnimating}
      style="--test-duration: {duration}ms; --test-timing: {composedTiming()};"
      onanimationend={() => testAnimating = false}
    ></div>
  </div>

  <!-- @starting-style -->
  <div class="row" style="margin-top: 12px;">
    <label class="label">
      <input
        type="checkbox"
        checked={startingStyleEnabled}
        onchange={(e) => startingStyleEnabled = (e.target as HTMLInputElement).checked}
      />
      <code>@starting-style</code>
    </label>
  </div>
  {#if startingStyleEnabled}
    <div class="note">
      <code>@starting-style</code> defines starting values for CSS transitions on elements that gain a display value (e.g., entering the DOM or going from <code>display: none</code> to a visible state). This enables entry animations without JavaScript.
    </div>
  {/if}

  <!-- animation-timeline -->
  <div class="row" style="margin-top: 8px;">
    <label class="label"><code>animation-timeline</code> <span class="experimental">(experimental)</span></label>
  </div>
  <div class="row">
    {#each timelineOptions as opt}
      <button
        class="preset-btn"
        class:active={animationTimeline === opt}
        onclick={() => setAnimTimeline(opt)}
      >
        {opt}
      </button>
    {/each}
  </div>
  <div class="note" style="margin-top: 2px;">
    Scroll-driven animations tie progress to scroll position (<code>scroll()</code>) or element visibility (<code>view()</code>).
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

  .cubic-editor {
    background: #222;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 6px;
  }

  .bezier-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .bezier-field {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .text-input {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 6px;
    font-size: 11px;
    font-family: ui-monospace, 'SF Mono', monospace;
    width: 60px;
  }

  .preview-track {
    position: relative;
    height: 24px;
    background: #222;
    border-radius: 12px;
    margin-bottom: 6px;
    overflow: hidden;
  }

  .preview-ball {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 16px;
    height: 16px;
    background: #5b9aff;
    border-radius: 50%;
    transition-property: left;
  }

  .preview-track:hover .preview-ball {
    left: calc(100% - 20px);
  }

  .test-btn {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #ddd;
    padding: 2px 10px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  }
  .test-btn:hover { background: #333; }

  .test-track {
    position: relative;
    height: 24px;
    background: #222;
    border-radius: 12px;
    margin-bottom: 6px;
    overflow: hidden;
  }

  .test-ball {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 16px;
    height: 16px;
    background: #5b9aff;
    border-radius: 50%;
  }

  .test-ball.animating {
    animation: slide-right var(--test-duration, 150ms) var(--test-timing, ease) forwards;
  }

  @keyframes slide-right {
    from { left: 4px; }
    to { left: calc(100% - 20px); }
  }

  .experimental {
    color: #888;
    font-style: italic;
    font-size: 10px;
  }

  .note {
    font-size: 10px;
    color: #777;
    line-height: 1.4;
    padding: 4px 6px;
    background: #1e1e1e;
    border-radius: 3px;
    margin-bottom: 6px;
  }

  .note code {
    font-family: ui-monospace, 'SF Mono', monospace;
    font-size: 10px;
    color: #aaa;
  }
</style>
