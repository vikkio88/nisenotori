<script>
    import Select from "../components/shared/Select.svelte";
    import CardsMemo from "../games/CardsMemo.svelte";
    import { CHARSETS, charsetOptions } from "../libs/data/charSets";
    import { HIRAGANA, KATAKANA } from "../libs/data/consts";

    let gameStarted = false;

    let kata = HIRAGANA;
    let selectedCharsetIndex = 0;
</script>

{#if gameStarted}
    <CardsMemo
        charset={CHARSETS[selectedCharsetIndex].charset}
        charsetLabel={CHARSETS[selectedCharsetIndex].label}
        kataChoice={kata}
    />
{:else}
    <h1>Card Memo Game</h1>
    <div class="f f1 cc g">
        <div>
            <h3>Syllabary</h3>
            <div class="f rc">
                <label for={HIRAGANA}>Hiragana</label>
                <input
                    name={HIRAGANA}
                    type="radio"
                    bind:group={kata}
                    value={HIRAGANA}
                />
            </div>
            <div class="f rc">
                <label for={KATAKANA}>Katakana</label>
                <input
                    name={KATAKANA}
                    type="radio"
                    bind:group={kata}
                    value={KATAKANA}
                />
            </div>
        </div>

        <div>
            <h3>Charset</h3>
            <Select
                options={charsetOptions}
                bind:selected={selectedCharsetIndex}
            />
        </div>

        <button class="big success mg" on:click={() => (gameStarted = true)}>
            Start
        </button>
    </div>
{/if}
