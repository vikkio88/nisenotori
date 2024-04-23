<script>
  import FlipCard from "../components/FlipCard.svelte";
  import { ROMAJI_CHARS } from "../libs/data/kataMap";
  import { randomKata } from "../libs/utils";

  let kata = randomKata();
  let katas = Object.values(ROMAJI_CHARS).slice(0, 4);
</script>

<div class="f1 f cc">
  <FlipCard {kata} hiragana />
  <div class="fi mg">
    <button>{kata.romaji}</button>
    <button>{kata.romaji}</button>
    <button>{kata.romaji}</button>
    <button>{kata.romaji}</button>
  </div>
</div>
