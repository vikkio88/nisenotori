<script>
    import CardsMemo from "../games/CardsMemo.svelte";
    import { BASE } from "../libs/data/charSets";
    import { HIRAGANA } from "../libs/data/consts";
</script>

<!-- 
<div>
    <div class="f rc">
      <label for={HIRAGANA}>Hiragana</label>
      <input
        name={HIRAGANA}
        type="radio"
        bind:group={kataChoice}
        value={HIRAGANA}
      />
    </div>
    <div class="f rc">
      <label for={KATAKANA}>Katakana</label>
      <input
        name={KATAKANA}
        type="radio"
        bind:group={kataChoice}
        value={KATAKANA}
      />
    </div>
  </div> -->

<CardsMemo charSet={BASE} kataChoice={HIRAGANA} />
