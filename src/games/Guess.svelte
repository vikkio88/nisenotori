<script>
  import FlipCard from "../components/FlipCard.svelte";
  import { BASE } from "../libs/data/charSets";
  import { KATA_MAP } from "../libs/data/kataMap";
  import { GUESS_GAME_TYPES, getNewGuessingSet } from "./utils/guess";

  export let type = GUESS_GAME_TYPES.SYLLABLES;
  export let charset = BASE;
  export let options = 4;
  
  let { kata, possibleKatas } = getNewGuessingSet(charset, options);
</script>

<div class="f1 f cc">
  {#if type === GUESS_GAME_TYPES.SYLLABLES}
    <FlipCard {kata} hiragana />
  {/if}
  <div class="fi mg g_5">
    {#each possibleKatas as r}
      <button class="big">
        {KATA_MAP[r].romajiLabel || KATA_MAP[r].romaji}
      </button>
    {/each}
  </div>
</div>
