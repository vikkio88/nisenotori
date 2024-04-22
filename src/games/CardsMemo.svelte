<script>
  import FlipCard from "../components/FlipCard.svelte";
  import Symbol from "../components/Symbol.svelte";
  import { ALL_SYLLABALES } from "../libs/data/charSets";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";
  import { randomKata } from "../libs/utils";
  import audioInstance, { SOUNDS } from "../libs/audio";
  import { onMount } from "svelte";

  export let charsetLabel = "All Syllables";
  export let charset = [...ALL_SYLLABALES];
  export let kataChoice = HIRAGANA;
  export let remove = false;
  export let mute = true;

  function newResult(charset) {
    return {
      shown: 1,
      total: charset.length,
      correct: [],
      wrong: [],
    };
  }

  let result = newResult(charset);

  let kata = randomKata(charset);
  let flipped = false;
  let wasFlipped = false;

  let isGameFinished = false;

  const audio = audioInstance();

  function correct() {
    result.correct.push(kata);
    if (!mute) {
      audio.play(SOUNDS.BEEP);
    }
    next();
  }

  function wrong() {
    result.wrong.push(kata);
    if (!mute) {
      audio.play(SOUNDS.BOBOP);
    }
    next();
  }

  function again() {
    flipped = false;
    wasFlipped = false;
    kata = randomKata(charset);
  }

  function next() {
    if (remove) {
      charset = charset.filter((c) => c != (kata.romaji || kata.romaji));
    }

    flipped = false;
    wasFlipped = false;
    if (result.total <= result.shown && remove) {
      endGame();
      return;
    }

    kata = randomKata(charset);
    result.shown += 1;
  }

  function endGame() {
    isGameFinished = true;
  }

  export let restart = () => {
    console.log("restart");
  };

  export let end = () => {
    console.log("end");
  };

  $: gameOver = isGameFinished || charset.length < 1;

  function reset(partialCharset) {
    charset = partialCharset.map((k) => k.romaji);
    result = newResult(charset);
    isGameFinished = false;
  }

  onMount(() => {
    return () => {
      audio.destroy();
    };
  });
</script>

<div>
  <h1>{kataChoice} ( {charsetLabel} )</h1>
  {#if !gameOver}
    <meter value={result.shown} max={result.total} min="1" />
  {/if}
</div>

{#if gameOver}
  <div class="f1 f cc g">
    <h2>Finished</h2>
    <h2 class="mg">
      Correct: {result.correct.length} Wrong: {result.wrong.length}
    </h2>
    <div class="fic g_5">
      <button class="success" on:click={restart}>Restart</button>
      <button class="danger" on:click={end}>End</button>
    </div>
  </div>
  {#if result.wrong.length > 0 && remove}
    <button class="success" on:click={() => reset(result.wrong)}>
      Try again
    </button>
    <h3 class="danger">Errors</h3>
    <div class="fi g">
      {#each result.wrong as kata}
        <Symbol
          small
          {kata}
          hiragana={kataChoice == HIRAGANA}
          katakana={kataChoice == KATAKANA}
          romaji
        />
      {/each}
    </div>
  {/if}
{:else}
  <div class="f f1 cc">
    <FlipCard
      {kata}
      hiragana={kataChoice === HIRAGANA}
      katakana={kataChoice === KATAKANA}
      {flipped}
    />
    <button
      class="mg"
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
  <div class="mg2 g_5 ctrls" class:hiddenCtrls={!wasFlipped}>
    <button class="danger" disabled={!wasFlipped} on:click={wrong}>
      Wrong
    </button>
    <button class="warning" disabled={!wasFlipped} on:click={again}>
      Again
    </button>
    <button class="success" disabled={!wasFlipped} on:click={correct}>
      Correct
    </button>
  </div>

  {#if !remove}
    <button class="danger" on:click={endGame}>End Game</button>
  {/if}
{/if}

<style>
  h1 {
    text-transform: capitalize;
  }
  h1,
  h2 {
    text-align: center;
  }

  h3 {
    margin: 0.5rem 0;
  }

  meter {
    width: 80vw;
  }

  .ctrls {
    transition: .5ms;
  }
  .hiddenCtrls {
    visibility: hidden;
    transition: 1ms;

  }
</style>
