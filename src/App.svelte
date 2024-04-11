<script>
  import Symbol from "./components/Symbol.svelte";
  import { KATA_MAP, ROMANJI_CHARS } from "./data/kataMap";
  function randomChar() {
    return Object.values(ROMANJI_CHARS)[
      Math.floor(Math.random() * Object.values(ROMANJI_CHARS).length)
    ];
  }

  let char = randomChar();
  let romanji = true;
  let kataChoice = "hiragana";
  $: hiragana = kataChoice == "hiragana";
</script>

<main class="f cs">
  <h1>Nise no tori</h1>
  <div class="f f1 cc">
    <Symbol kata={KATA_MAP[char]} {romanji} {hiragana} katakana={!hiragana} />
    <div>
      <button class="mg" on:click={() => (char = randomChar())}>More</button>
      <form class="f cc">
        <div class="f rc">
          <label for="romanji">Romanji</label>
          <input type="checkbox" name="romanji" bind:checked={romanji} />
        </div>
        <div class="f rc">
          <label for="hiragana">Hiragana</label>
          <input
            name="hiragana"
            type="radio"
            bind:group={kataChoice}
            value="hiragana"
          />
        </div>
        <div class="f rc">
          <label for="katakana">Katakana</label>
          <input
            name="katakana"
            type="radio"
            bind:group={kataChoice}
            value="katakana"
          />
        </div>
      </form>
    </div>
  </div>
</main>

<style>
</style>
