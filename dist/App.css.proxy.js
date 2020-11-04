// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-11dvc2w.svelte-11dvc2w{text-align:center}.App.svelte-11dvc2w p.svelte-11dvc2w{margin:0.4rem}.App-header.svelte-11dvc2w.svelte-11dvc2w{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-logo.svelte-11dvc2w.svelte-11dvc2w{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-11dvc2w-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-11dvc2w-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}