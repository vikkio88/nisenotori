<script>
  import Symbol from "./components/Symbol.svelte";
  import { KATA_MAP, ROMANJI_CHARS } from "./data/kataMap";
  function randomChar() {
    return Object.values(ROMANJI_CHARS)[
      Math.floor(Math.random() * Object.values(ROMANJI_CHARS).length)
    ];
  }

  let char = randomChar();
  let romanji = false;
  let kataChoice = "hiragana";
  $: hiragana = kataChoice == "hiragana";
</script>

<main class="f cs">
  <h1>Nise no tori</h1>
  <div class="f f1 cc">
    <Symbol kata={KATA_MAP[char]} {romanji} {hiragana} katakana={!hiragana} />
    <div>
      <div class="g_5 mg fi">
        <button class="primary" on:click={() => (romanji = !romanji)}>
          Show
        </button>
        <button on:click={() => (char = randomChar())}>Next</button>
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
    </div>
  </div>
</main>

<style>
</style>
