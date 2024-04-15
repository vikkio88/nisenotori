<script>
  import { navigate } from "svelte-routing";
  import Select from "../components/shared/Select.svelte";
  import CardsMemo from "../games/CardsMemo.svelte";
  import { CHARSETS, charsetOptions } from "../libs/data/charSets";
  import { HIRAGANA, KATAKANA } from "../libs/data/consts";

  let gameStarted = false;

  let kata = HIRAGANA;
  let selectedCharsetIndex = 0;

  let endlessMode = false;
</script>

{#if gameStarted}
  <CardsMemo
    charset={CHARSETS[selectedCharsetIndex].charset}
    charsetLabel={CHARSETS[selectedCharsetIndex].label}
    kataChoice={kata}
    remove={!endlessMode}
    restart={() => (gameStarted = false)}
    end={() => navigate("/", { replace: true })}
  />
{:else}
  <h1>Card Memo Game</h1>
  <div class="f f1 cc g">
    <div class="f cc g1">
      <h3>Syllabary</h3>
      <div class="f rc">
        <label for={HIRAGANA}>Hiragana</label>
        <input
          name={HIRAGANA}
          type="radio"
          bind:group={kata}
          value={HIRAGANA}
        />
      </div>
      <div class="f rc">
        <label for={KATAKANA}>Katakana</label>
        <input
          name={KATAKANA}
          type="radio"
          bind:group={kata}
          value={KATAKANA}
        />
      </div>
    </div>
    <div class="f cc">
      <h3>Charset</h3>
      <Select options={charsetOptions} bind:selected={selectedCharsetIndex} />
    </div>

    <button class="big success mg" on:click={() => (gameStarted = true)}>
      Start
    </button>

    <div class="f cc mg">
      <h3>Game Options</h3>
      <div class="f rc">
        <label for="endlessMode">Endless Mode</label>
        <input type="checkbox" name="endlessMode" bind:checked={endlessMode} />
      </div>
    </div>
  </div>
{/if}
