// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-ikjdiy.svelte-ikjdiy{text-align:center}.App.svelte-ikjdiy p.svelte-ikjdiy{margin:0.4rem}.App-header.svelte-ikjdiy.svelte-ikjdiy{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-logo.svelte-ikjdiy.svelte-ikjdiy{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-ikjdiy-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-ikjdiy-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}.btn.svelte-ikjdiy.svelte-ikjdiy{margin-top:30px;background-color:#44337a;color:white;padding:5px 15px;font-size:0.8em;font-weight:bold;border:0;border-radius:5px}.btn.svelte-ikjdiy.svelte-ikjdiy:hover{background-color:#6b46c1;cursor:pointer}.btn.svelte-ikjdiy.svelte-ikjdiy:active{background-color:#5c2ccc}.btn.svelte-ikjdiy.svelte-ikjdiy:focus{outline:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}