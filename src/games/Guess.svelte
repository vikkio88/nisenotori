<script>
  import FlipCard from "../components/FlipCard.svelte";
  import { BASE } from "../libs/data/charSets";
  import { GUESS_GAME_TYPES, getNewGuessingSet } from "./utils/guess";

  export let type = GUESS_GAME_TYPES.SYLLABLES;
  export let charset = BASE;
  let { kata, possibleKatas } = getNewGuessingSet(charset);
</script>

<div class="f1 f cc">
  {#if type === GUESS_GAME_TYPES.SYLLABLES}
    <FlipCard {kata} hiragana />
  {/if}
  <div class="fi mg g_5">
    {#each possibleKatas as possibleKata}
      <button>{possibleKata}</button>
    {/each}
  </div>
</div>
