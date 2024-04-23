<script>
  import { navigate } from "svelte-routing";
  import { KATA_MAP, ROMAJI_CHARS } from "../libs/data/kataMap";
</script>

<h1 title="偽の鳥">Nise no tori</h1>
<h2 title="Fake Bird">偽の鳥</h2>

<div class="f cc f1 g">
  <h2>Learning</h2>
  <button class="big success" on:click={() => navigate("/syllabary")}>
    {KATA_MAP[ROMAJI_CHARS.A].hiragana}

    {KATA_MAP[ROMAJI_CHARS.A].katakana}
  </button>
</div>
<div class="f cc f1 g">
  <h2>Games</h2>
  <button class="big" on:click={() => navigate("/cards")}>Cards</button>
  <button class="big" on:click={()=> navigate("/guess")}>Guess</button>
</div>
