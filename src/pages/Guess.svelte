<script>
  import { navigate } from "svelte-routing";
  import Select from "../components/shared/Select.svelte";
  import SyllabarySelector from "../components/shared/SyllabarySelector.svelte";
  import Game from "../games/Guess.svelte";
  import { CHARSETS, charsetOptions } from "../libs/data/charSets";
  import { HIRAGANA } from "../libs/data/consts";
  import { GUESS_GAME_TYPES, guessGameTypes } from "../games/utils/guess";

  let kata = HIRAGANA;
  let selectedCharsetIndex = 0;

  let selectedGameType = GUESS_GAME_TYPES.AUDIO;
  let optionsFromCharset = true;

  let gameStarted = false;
</script>

{#if !gameStarted}
  <h1>Guess Game</h1>
  <div class="f f1 cc g">
    <div class="f fr g2">
      <div class="f cc g_5">
        <h3>Syllabary</h3>
        <SyllabarySelector bind:kata />
      </div>
      <div class="f cs">
        <h3>Charset</h3>
        <Select options={charsetOptions} bind:selected={selectedCharsetIndex} />
      </div>
    </div>

    <div class="f cc g_5 mg">
      <h3>Game Options</h3>
      <div class="fi g_5">
        <label
          for="optionsPicks"
          title="The answers will be picked from the charset selected"
        >
          Options from selected charset
        </label>
        <input
          type="checkbox"
          name="optionsPicks"
          bind:checked={optionsFromCharset}
        />
      </div>
      <div class="fi g_5">
        <label for="">Guess Type</label>
        <Select options={guessGameTypes} bind:selected={selectedGameType} />
      </div>
    </div>
    <button class="success big mg" on:click={() => (gameStarted = true)}>
      Start
    </button>
  </div>
{:else}
  <Game
    charset={CHARSETS[selectedCharsetIndex].charset}
    kataChoice={kata}
    type={selectedGameType}
    {optionsFromCharset}
    restart={() => (gameStarted = false)}
    end={() => navigate("/", { replace: true })}
  />
{/if}
