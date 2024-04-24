<script>
  // @ts-ignore
  import { Howl } from "howler";
  import FlipCard from "../components/FlipCard.svelte";
  import { BASE } from "../libs/data/charSets";
  import { KATA_MAP } from "../libs/data/kataMap";
  import { GUESS_GAME_TYPES, getNewGuessingSet } from "./utils/guess";
  import { audioUrlFromKata } from "../libs/audio";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";

  export let kataChoice = HIRAGANA;
  export let type = GUESS_GAME_TYPES.AUDIO;
  export let charset = BASE;
  export let options = 4;

  let currentQuiz = getNewGuessingSet(charset, options, type);

  let audio = null;
  $: {
    audio && audio.unload();

    audio = new Howl({
      src: audioUrlFromKata(currentQuiz.kata),
    });
    if (currentQuiz.guessType === GUESS_GAME_TYPES.AUDIO) {
      // @ts-ignore
      audio.once("load", () => audio.play());
      // @ts-ignore
      if (!audio.playing()) {
        // @ts-ignore
        audio.play();
      }
    }
  }

  function play() {
    if (audio && !audio.playing()) {
      audio.play();
    }
  }

  function guess(romaji) {
    if (currentQuiz.kata.romaji === romaji) {
      console.log("CORRECT");
    } else {
      console.log("WRONG");
    }

    currentQuiz = getNewGuessingSet(charset, options, type);
  }
</script>

<div class="f1 f cc">
  {#if currentQuiz.guessType === GUESS_GAME_TYPES.SYLLABLES}
    <FlipCard
      kata={currentQuiz.kata}
      hiragana={kataChoice === HIRAGANA}
      katakana={kataChoice === KATAKANA}
    />
  {:else if currentQuiz.guessType === GUESS_GAME_TYPES.AUDIO}
    <button class="huge success" on:click={play}>🔊</button>
  {/if}
  <div class="fi mg2 g_5">
    {#each currentQuiz.possibleKatas as r}
      <button class="big" on:click={() => guess(r)}>
        {#if currentQuiz.guessType === GUESS_GAME_TYPES.SYLLABLES}
          {KATA_MAP[r].romajiLabel || KATA_MAP[r].romaji}
        {:else if currentQuiz.guessType === GUESS_GAME_TYPES.AUDIO}
          {#if kataChoice === HIRAGANA}
            {KATA_MAP[r].hiragana}
          {:else}
            {KATA_MAP[r].katakana}
          {/if}
        {/if}
      </button>
    {/each}
  </div>
</div>

<style>
  .huge {
    font-size: 5rem;
    padding: 4rem;
  }
</style>
