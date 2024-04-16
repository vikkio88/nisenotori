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
  let mute = true;
</script>

{#if gameStarted}
  <CardsMemo
    charset={CHARSETS[selectedCharsetIndex].charset}
    charsetLabel={CHARSETS[selectedCharsetIndex].label}
    kataChoice={kata}
    remove={!endlessMode}
    restart={() => (gameStarted = false)}
    end={() => navigate("/", { replace: true })}
    {mute}
  />
{:else}
  <h1>Card Memo Game</h1>
  <div class="f f1 cc g">
    <div class="f fr g2">
      <div class="f cc g_5">
        <h3>Syllabary</h3>
        <div class="fi g_5">
          <label for={HIRAGANA}>Hiragana</label>
          <input
            name={HIRAGANA}
            type="radio"
            bind:group={kata}
            value={HIRAGANA}
          />
        </div>
        <div class="fi g_5">
          <label for={KATAKANA}>Katakana</label>
          <input
            name={KATAKANA}
            type="radio"
            bind:group={kata}
            value={KATAKANA}
          />
        </div>
      </div>
      <div class="f cs">
        <h3>Charset</h3>
        <Select options={charsetOptions} bind:selected={selectedCharsetIndex} />
      </div>
    </div>

    <div class="f cc mg g_5">
      <h3>Game Options</h3>
      <div class="fi g_5">
        <label for="endlessMode">Endless Mode</label>
        <input type="checkbox" name="endlessMode" bind:checked={endlessMode} />
      </div>
      <div class="fi g_5">
        <label for="muted">Mute Audio</label>
        <input type="checkbox" name="muted" bind:checked={mute} />
      </div>
    </div>

    <button class="big success mg" on:click={() => (gameStarted = true)}>
      Start
    </button>
  </div>
{/if}
