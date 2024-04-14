<script>
  import FlipCard from "../components/FlipCard.svelte";
  import { ALL_SYLLABALES } from "../libs/data/charSets";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";
  import { randomKata } from "../libs/utils";

  export let charsetLabel = "All Syllables";
  export let charset = [...ALL_SYLLABALES];
  export let kataChoice = HIRAGANA;
  export let remove = false;

  let result = {
    shown: 1,
    total: charset.length,
    correct: 0,
    wrong: 0,
  };

  let kata = randomKata(charset);
  let flipped = false;
  let wasFlipped = false;

  function correct() {
    result.correct += 1;
    next();
  }

  function wrong() {
    result.wrong += 1;
    next();
  }

  function next() {
    if (remove) {
      charset = charset.filter((c) => c != (kata.romanji || kata.romanji));
    }
    flipped = false;
    wasFlipped = false;
    kata = randomKata(charset);
    result.shown += 1;
  }
</script>

<div>
  <h1>{kataChoice} ({charsetLabel})</h1>
  <h2>
    {result.shown}/{result.total} Correct: {result.correct} Wrong: {result.wrong}
  </h2>
</div>
<div class="f f1 cc">
  <FlipCard
    {kata}
    hiragana={kataChoice === HIRAGANA}
    katakana={kataChoice === KATAKANA}
    {flipped}
  />
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
  h1 {
    text-transform: capitalize;
  }
  h1,
  h2 {
    text-align: center;
  }
</style>
