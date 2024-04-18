<script>
    import { Howl } from "howler";
    import Symbol from "../components/Symbol.svelte";
    import { KATA_MAP } from "../libs/data/kataMap";
    import { HIRAGANA, KATAKANA } from "../libs/data/consts";
    import { onMount } from "svelte";

    export let romanji = null;
    export let kata = HIRAGANA;
    let syllable = KATA_MAP[romanji] || false;
    let audio = null;
    let playing = false;

    onMount(() => {
        if (Boolean(syllable)) {
            audio = new Howl({
                src: `/assets/audio/syllables/${syllable.romanji}.mp3`,
            });
            // @ts-ignore
            audio.on("play", function () {
                playing = true;
            });
            // @ts-ignore
            audio.on("end", function () {
                playing = false;
            });
        }
        return () => {
            if (audio) {
                audio.unload();
            }
        };
    });
</script>

{#if !Boolean(syllable)}
    <div class="f1 f cc">not a romanji syllable</div>
{:else}
    <h2 class="tt-cpz">{kata}</h2>

    <div class="f1 f cc">
        <div class="f r g">
            {#if kata === KATAKANA}
                <Symbol kata={syllable} romanji katakana />
                <img
                    src={`/assets/img/kana/${romanji}_${KATAKANA}.svg`}
                    alt={`${romanji} kana ${KATAKANA} stroke order`}
                />
            {:else}
                <Symbol kata={syllable} romanji />
                <img
                    src={`/assets/img/kana/${romanji}_${HIRAGANA}.svg`}
                    alt={`${romanji} kana ${HIRAGANA} stroke order`}
                />
            {/if}
        </div>

        <div class="f c g mg">
            {#if audio}
                <button
                    class="success"
                    disabled={!Boolean(audio) || playing}
                    on:click={() => {
                        audio.play();
                    }}
                >
                    Audio
                </button>
            {/if}
            <button
                class="tt-cpz"
                on:click={() =>
                    (kata = kata === HIRAGANA ? KATAKANA : HIRAGANA)}
            >
                {syllable.hiragana}
                {#if kata === HIRAGANA}
                    {`>`}
                {:else}
                    {`<`}
                {/if}
                {syllable.katakana}
            </button>
        </div>
    </div>
{/if}
