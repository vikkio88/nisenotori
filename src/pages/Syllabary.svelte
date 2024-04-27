<script>
    import { navigate } from "svelte-routing";
    import Symbol from "../components/Symbol.svelte";
    import SyllabarySelector from "../components/shared/SyllabarySelector.svelte";
    import {
        A,
        K,
        S,
        T,
        N,
        H,
        M,
        Y,
        R,
        W,
        n,
        G,
        Z,
        D,
        B,
        P,
    } from "../libs/data/charSets";
    import { HIRAGANA, KATAKANA, ROMAJI } from "../libs/data/consts";
    import { KATA_MAP } from "../libs/data/kataMap";
    const baseRows = [
        A,
        K,
        S,
        T,
        N,
        H,
        M,
        [Y[0], null, Y[1], null, Y[2]],
        R,
        [W[0], null, null, null, W[1]],
        [n, null, null, null, null],
    ];

    const dakuonRows = [G, Z, D, B, P];

    let romaji = false;
    let kata = HIRAGANA;
</script>

<h1>{kata}</h1>
<div class="f r g">
    <div class="f cc g_5 mg_5">
        <SyllabarySelector bind:kata />
    </div>

    <div class="f rc g_5 mg_5">
        <label class="tt-cpz" for="romaji">{ROMAJI}</label>
        <input type="checkbox" name="romaji" bind:checked={romaji} />
    </div>
</div>

<h2>Base</h2>
{#each baseRows as row}
    <div class="f r">
        {#each row as syllable}
            <div class="f1 f c">
                {#if syllable}
                    <div class="sWrapper">
                        <Symbol
                            hiragana={kata === HIRAGANA}
                            katakana={kata === KATAKANA}
                            kata={KATA_MAP[syllable]}
                            {romaji}
                        />
                        <div class="btn f cc">
                            <button
                                class="small"
                                on:click={() =>
                                    navigate(
                                        `/${kata}/${KATA_MAP[syllable].romaji}`,
                                    )}
                            >
                                ➡️
                            </button>
                        </div>
                    </div>
                {:else}
                    <div class="spacer" />
                {/if}
            </div>
        {/each}
    </div>
{/each}
<h2>Dakuon / Handakuon</h2>
{#each dakuonRows as row}
    <div class="f r">
        {#each row as syllable}
            <div class="f1 f c">
                <div class="sWrapper">
                    <Symbol
                        hiragana={kata === HIRAGANA}
                        katakana={kata === KATAKANA}
                        kata={KATA_MAP[syllable]}
                        {romaji}
                    />
                    <div class="btn f cc">
                        <button
                            class="small"
                            on:click={() =>
                                //ADD Dakuon
                                navigate(
                                    `/${kata}/${KATA_MAP[syllable].romaji}`,
                                )}
                        >
                            ➡️
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/each}

<style>
    h1 {
        text-transform: capitalize;
    }
    h2 {
        margin-bottom: 1rem;
    }
    .spacer {
        padding: 2.3rem;
    }

    .sWrapper > .btn {
        visibility: hidden;
    }

    .sWrapper:hover > .btn {
        visibility: visible;
    }
</style>
