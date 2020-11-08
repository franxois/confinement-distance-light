// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-1mj7hdf.svelte-1mj7hdf{text-align:center}.App.svelte-1mj7hdf p.svelte-1mj7hdf{margin:0.4rem}.App-header.svelte-1mj7hdf.svelte-1mj7hdf{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-logo.svelte-1mj7hdf.svelte-1mj7hdf{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-1mj7hdf-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-1mj7hdf-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}.btn.svelte-1mj7hdf.svelte-1mj7hdf{margin-top:30px;background-color:#44337a;color:white;padding:5px 15px;font-size:0.8em;font-weight:bold;border:0;border-radius:5px}.btn.svelte-1mj7hdf.svelte-1mj7hdf:hover{background-color:#58429e;cursor:pointer}.btn.svelte-1mj7hdf.svelte-1mj7hdf:active{background-color:#624ab0}.btn.svelte-1mj7hdf.svelte-1mj7hdf:focus{outline:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}