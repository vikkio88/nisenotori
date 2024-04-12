<script>
  import Symbol from "../components/Symbol.svelte";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";
  import { randomKata } from "../libs/utils";

  let kata = randomKata();
  let romanji = false;
  let kataChoice = HIRAGANA;
  $: hiragana = kataChoice == HIRAGANA;
</script>

<div class="f f1 cc">
  <Symbol {kata} {romanji} {hiragana} katakana={!hiragana} />
  <div>
    <div class="g_5 mg fi">
      <button class="primary" on:click={() => (romanji = !romanji)}>
        Show
      </button>
      <button
        on:click={() => {
          romanji = false;
          kata = randomKata();
        }}>Next</button
      >
    </div>
    <div class="f rc">
      <label for={HIRAGANA}>Hiragana</label>
      <input
        name={HIRAGANA}
        type="radio"
        bind:group={kataChoice}
        value={HIRAGANA}
      />
    </div>
    <div class="f rc">
      <label for={KATAKANA}>Katakana</label>
      <input
        name={KATAKANA}
        type="radio"
        bind:group={kataChoice}
        value={KATAKANA}
      />
    </div>
  </div>
</div>
