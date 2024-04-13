<script>
  import FlipCard from "../components/FlipCard.svelte";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";
  import { randomKata } from "../libs/utils";

  let result = {
    shown: 1,
    correct: 0,
    wrong: 0,
  };

  let kata = randomKata();
  let flipped = false;
  let wasFlipped = false;
  let kataChoice = HIRAGANA;
  $: hiragana = kataChoice == HIRAGANA;

  function correct() {
    result.correct += 1;
    next();
  }

  function wrong() {
    result.wrong += 1;
    next();
  }

  function next() {
    flipped = false;
    wasFlipped = false;
    kata = randomKata();
    result.shown += 1;
  }
</script>

<div>
  <h1>Card Game</h1>
  <h2>Shown: {result.shown} Correct: {result.correct} Wrong: {result.wrong}</h2>
  <div>
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
<div class="f f1 cc">
  <FlipCard {kata} {hiragana} katakana={!hiragana} {flipped} />
</div>

<div class="mg fi">
  <button
    class="warning"
    on:click={() => {
      if (!wasFlipped) {
        wasFlipped = true;
      }
      flipped = !flipped;
    }}
  >
    Flip
  </button>
</div>
<div class="mg2 g_5">
  <button class="danger" disabled={!wasFlipped} on:click={wrong}>
    Wrong
  </button>
  <button class="success" disabled={!wasFlipped} on:click={correct}>
    Correct
  </button>
</div>

<style>
  h1,
  h2 {
    text-align: center;
  }
</style>
