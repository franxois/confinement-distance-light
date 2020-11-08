<script lang="ts">
  import { calculateDistance } from "./distance";

  let latitude: number;
  let longitude: number;
  let accuracy: number;
  let lastFix: Date;

  const KEY_LOCATION = "confinement:home";

  navigator.geolocation.watchPosition(function (position) {
    console.log(position);
    // Destructuring without affectation
    ({ latitude, longitude, accuracy } = position.coords);
    lastFix = new Date();
    lastFix.setTime(position.timestamp);
  });

  let reference = {} as { latitude: number; longitude: number };
  const saved = window.localStorage.getItem(KEY_LOCATION);
  if (saved !== null) {
    reference = JSON.parse(saved);
  }

  const saveLocation = () => {
    reference = { latitude, longitude };
    window.localStorage.setItem(KEY_LOCATION, JSON.stringify(reference));
  };

  $: precision =
    accuracy !== undefined ? Math.round(accuracy) + "m" : undefined;

  $: humanDate = lastFix !== undefined ? lastFix.toLocaleString() : undefined;

  let distance: string;
  let link2homeGmap: string;

  $: if (reference.latitude && reference.longitude && latitude && longitude) {
    distance =
      Math.round(
        calculateDistance(
          reference.latitude,
          reference.longitude,
          latitude,
          longitude
        ) * 1000
      ) + "m";
    link2homeGmap =
      "https://www.google.com/maps/search/?api=1&query=" +
      reference.latitude +
      "," +
      reference.longitude;
  }
</script>

<style lang="scss">
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
    p {
      margin: 0.4rem;
    }
  }

  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .App-logo {
    height: 36vmin;
    pointer-events: none;
    margin-bottom: 3rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }

  $button-color: #44337a;

  .btn {
    margin-top: 30px;
    background-color: $button-color;
    color: white;
    padding: 5px 15px;
    font-size: 0.8em;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    &:hover {
      background-color: scale-color($color: $button-color, $lightness: 10%);
      cursor: pointer;
    }
    &:active {
      background-color: scale-color($color: $button-color, $lightness: 15%);
    }
    &:focus {
      outline: 0;
    }
  }
</style>

<div class="App">
  <header class="App-header">
    <img src="compass-svgrepo-com.svg" class="App-logo" alt="logo" />
    <p>Position : {latitude},{longitude}</p>
    <p>Précision : {precision}</p>
    <p>Date : {humanDate}</p>
    {#if distance}
      <p>
        Distance :
        {distance}
        from
        <a href={link2homeGmap} target="_blank">🏠</a>
      </p>
    {/if}
    <button class="btn" on:click={saveLocation}>save position</button>
  </header>
</div>
