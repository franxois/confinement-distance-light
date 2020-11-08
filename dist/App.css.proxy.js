// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-42zq8i.svelte-42zq8i{text-align:center}.App.svelte-42zq8i p.svelte-42zq8i{margin:0.4rem}.App-header.svelte-42zq8i.svelte-42zq8i{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-logo.svelte-42zq8i.svelte-42zq8i{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-42zq8i-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-42zq8i-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}.btn.svelte-42zq8i.svelte-42zq8i{margin-top:30px;background-color:#44337a;color:white;padding:5px 15px;font-size:0.8em;font-weight:bold;border:0;border-radius:5px}.btn.svelte-42zq8i.svelte-42zq8i:hover{background-color:#513d92;cursor:pointer}.btn.svelte-42zq8i.svelte-42zq8i:active{background-color:#58429e}.btn.svelte-42zq8i.svelte-42zq8i:focus{outline:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}