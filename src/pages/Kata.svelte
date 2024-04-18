<script>
    import { Howl } from "howler";
    import Symbol from "../components/Symbol.svelte";
    import { KATA_MAP } from "../libs/data/kataMap";
    import { HIRAGANA, KATAKANA } from "../libs/data/consts";
    import { onMount } from "svelte";

    export let romaji = null;
    export let kata = HIRAGANA;
    let syllable = KATA_MAP[romaji] || false;
    let audio = null;
    let playing = false;

    onMount(() => {
        if (Boolean(syllable)) {
            audio = new Howl({
                src: `/assets/audio/syllables/${syllable.romaji}.mp3`,
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
    <div class="f1 f cc">not a romaji syllable</div>
{:else}
    <h2 class="tt-cpz">{kata}</h2>

    <div class="f1 f cc">
        <div class="f r g">
            {#if kata === KATAKANA}
                <Symbol kata={syllable} romaji katakana />
                <img
                    src={`/assets/img/kana/${romaji}_${KATAKANA}.svg`}
                    alt={`${romaji} kana ${KATAKANA} stroke order`}
                />
            {:else}
                <Symbol kata={syllable} romaji />
                <img
                    src={`/assets/img/kana/${romaji}_${HIRAGANA}.svg`}
                    alt={`${romaji} kana ${HIRAGANA} stroke order`}
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
