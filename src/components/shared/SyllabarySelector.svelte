<script>
    import { HIRAGANA, KATAKANA } from "../../libs/data/consts";

    export let kata = HIRAGANA;
</script>

<div class="fi g_5">
    <label class="tt-cpz" for={HIRAGANA}>{HIRAGANA}</label>
    <input name={HIRAGANA} type="radio" bind:group={kata} value={HIRAGANA} />
</div>
<div class="fi g_5">
    <label class="tt-cpz" for={KATAKANA}>{KATAKANA}</label>
    <input name={KATAKANA} type="radio" bind:group={kata} value={KATAKANA} />
</div>
