/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    ["@snowpack/plugin-build-script", {"cmd": "postcss", "input": [".css"], "output": [".css"]}],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    metaDir: "snowpack",
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
