<script>
  import { navigate } from "svelte-routing";
  import { KATA_MAP, ROMAJI_CHARS } from "../libs/data/kataMap";
  import AccountBadge from "../components/AccountBadge.svelte";
  import Title from "../components/shared/Title.svelte";
  Title;
</script>

<div class="pos-atr">
  <AccountBadge />
</div>

<Title />
<div class="f cc f1 g">
  <h2>Learning</h2>
  <button class="big success" on:click={() => navigate("/syllabary")}>
    {KATA_MAP[ROMAJI_CHARS.A].hiragana}

    {KATA_MAP[ROMAJI_CHARS.A].katakana}
  </button>
</div>
<div class="f cc f1 g">
  <h2>Games</h2>
  <div class="fwc g_5">
    <button class="big" on:click={() => navigate("/cards")}>Cards</button>
    <button class="big" on:click={() => navigate("/guess")}>Guess</button>
    <button class="big" on:click={() => navigate("/katakatype")}>
      Katakatype
    </button>
  </div>
</div>
