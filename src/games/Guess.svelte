<script>
  import { Howl } from "howler";
  import FlipCard from "../components/FlipCard.svelte";
  import { BASE, removeCurrentRomaji } from "../libs/data/charSets";
  import { KATA_MAP } from "../libs/data/kataMap";
  import { GUESS_GAME_TYPES, getNewGuessingSet } from "./utils/guess";
  import { audioUrlFromKata } from "../libs/audio";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";
  import { GameResult } from "./utils/gameResult";
  import Symbol from "../components/Symbol.svelte";

  let gameFinished = false;
  const result = new GameResult();
  let finalResult = null;

  export let kataChoice = HIRAGANA;
  export let crossKanaGuess = false;
  export let optionsFromCharset = false;
  export let type = GUESS_GAME_TYPES.AUDIO;
  export let charset = BASE;
  export let options = 4;
  let picks = optionsFromCharset ? [...charset] : [...BASE];

  export let restart = () => {
    console.log("restart");
  };
  export let end = () => {
    console.log("end");
  };

  let currentQuiz = getNewGuessingSet({
    charset,
    options,
    gameType: type,
    picks,
  });

  let canGuess = true;
  let lastCorrect = null;

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
    canGuess = false;
    if (currentQuiz.kata.romaji === romaji) {
      result.markCorrect(currentQuiz.kata);
      lastCorrect = true;
    } else {
      result.markWrong(currentQuiz.kata);
      lastCorrect = false;
    }

    setTimeout(() => {
      charset = charset.filter(removeCurrentRomaji(currentQuiz.kata));
      canGuess = true;
      if (charset.length < 1) {
        finalResult = result.result();
        gameFinished = true;
        return;
      }

      currentQuiz = getNewGuessingSet({
        charset,
        options,
        gameType: type,
        picks,
      });
    }, 900);
  }

  function getCorrectAnswer(currentQuiz) {
    if (currentQuiz.guessType === GUESS_GAME_TYPES.AUDIO) {
      return kataChoice === HIRAGANA
        ? currentQuiz.kata.hiragana
        : currentQuiz.kata.katakana;
    }

    // Syllable
    if (crossKanaGuess) {
      return kataChoice === HIRAGANA
        ? currentQuiz.kata.katakana
        : currentQuiz.kata.hiragana;
    }

    return currentQuiz.kata.romaji;
  }
</script>

{#if gameFinished}
  <div class="f1 f cc">
    <h2>Finished</h2>
    <h2 class="mg">
      Correct: {finalResult.correct} Wrong: {finalResult.wrong}
    </h2>
    <div class="fic g_5">
      <button class="success" on:click={restart}>Restart</button>
      <button class="danger" on:click={end}>End</button>
    </div>
  </div>
  {#if finalResult.errors.length > 0}
    <div class="f cc">
      <h3 class="danger">Errors</h3>
      <div class="fi g">
        {#each finalResult.errors as r}
          <Symbol
            small
            kata={KATA_MAP[r]}
            hiragana={kataChoice == HIRAGANA}
            katakana={kataChoice == KATAKANA}
            romaji
          />
        {/each}
      </div>
    </div>
  {/if}
{:else}
  <div class="f1 f cc">
    {#if currentQuiz.guessType === GUESS_GAME_TYPES.SYLLABLES}
      <FlipCard
        kata={currentQuiz.kata}
        hiragana={kataChoice === HIRAGANA}
        katakana={kataChoice === KATAKANA}
      />
    {:else if currentQuiz.guessType === GUESS_GAME_TYPES.AUDIO}
      <button disabled={!canGuess} class="huge success" on:click={play}>
        🔊
      </button>
    {/if}
    <div class="fi mg2 g_5">
      {#each currentQuiz.possibleKatas as r}
        <button class="big" on:click={() => guess(r)} disabled={!canGuess}>
          {#if currentQuiz.guessType === GUESS_GAME_TYPES.SYLLABLES}
            {#if crossKanaGuess}
              {#if kataChoice === HIRAGANA}
                {KATA_MAP[r].katakana}
              {:else}
                {KATA_MAP[r].hiragana}
              {/if}
            {:else}
              {KATA_MAP[r].romajiLabel || KATA_MAP[r].romaji}
            {/if}
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
  <div
    class="result pulse f cc"
    class:hide={canGuess}
    class:correct={lastCorrect}
    class:wrong={!lastCorrect}
  >
    {`${lastCorrect ? "Correct" : `Wrong`}`}
    <h1>{getCorrectAnswer(currentQuiz)}</h1>
  </div>
{/if}

<style>
  .huge {
    font-size: 5rem;
    padding: 4rem;
  }

  .result {
    font-size: 2rem;
  }

  .correct {
    color: var(--success-color);
  }
  .wrong {
    color: var(--danger-color);
  }

  .hide {
    visibility: hidden;
  }
</style>
