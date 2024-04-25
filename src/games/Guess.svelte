<script>
  import { Howl } from "howler";
  import FlipCard from "../components/FlipCard.svelte";
  import { BASE, removeCurrentRomaji } from "../libs/data/charSets";
  import { KATA_MAP } from "../libs/data/kataMap";
  import { GUESS_GAME_TYPES, getNewGuessingSet } from "./utils/guess";
  import { audioUrlFromKata } from "../libs/audio";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";

  let gameFinished = false;

  export let kataChoice = HIRAGANA;
  export let optionsFromCharset = false;
  export let type = GUESS_GAME_TYPES.AUDIO;
  export let charset = BASE;
  let picks = optionsFromCharset ? [...charset] : [...BASE];
  export let options = 4;
  export let end = () => {
    console.log("end");
  };

  let currentQuiz = getNewGuessingSet({
    charset,
    options,
    gameType: type,
    picks,
  });

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

  /**
   * @param {string} romaji
   */
  function guess(romaji) {
    if (currentQuiz.kata.romaji === romaji) {
      console.log("CORRECT");
    } else {
      console.log("WRONG");
    }

    charset = charset.filter(removeCurrentRomaji(currentQuiz.kata));

    if (charset.length < 1) {
      gameFinished = true;
      return;
    }

    currentQuiz = getNewGuessingSet({
      charset,
      options,
      gameType: type,
      picks,
    });
  }
</script>

{#if gameFinished}
  <div class="f1 f cc">
    <h1>Finished</h1>
    <div class="fic g_5">
      <button class="danger" on:click={end}>End</button>
    </div>
  </div>
{:else}
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
{/if}

<style>
  .huge {
    font-size: 5rem;
    padding: 4rem;
  }
</style>
