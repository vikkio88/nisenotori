<script>
    import { navigate } from "svelte-routing";
    import Spinner from "../../components/shared/Spinner.svelte";
    import KatakanaType from "../../games/KatakanaType.svelte";
    import { TYPING_GAMES } from "../../games/utils/typing";
    import { loadWords } from "../../libs/fetch";
    import SyllabarySelector from "../../components/shared/SyllabarySelector.svelte";
    import { slide } from "svelte/transition";

    let wordsP = loadWords();

    function startGame() {
        gameStarted = true;
    }

    let gameStarted = false;

    let gameType = TYPING_GAMES.KATAKANA;
</script>

<h1>KataType</h1>
{#await wordsP}
    <div class="f cc f1">
        <Spinner />
    </div>
{:then words}
    {#if gameStarted}
        <KatakanaType
            words={gameType === TYPING_GAMES.HIRAGANA
                ? words.hiraganaWords.slice(0, 5)
                : words.katakanaWords.slice(0, 5)}
            kana={gameType}
            restart={() => (gameStarted = false)}
            end={() => navigate("/", { replace: true })}
        />
    {:else}
        <div class="f1 f cc">
            <div class="f fr g2">
                <div class="f cc g_5">
                    <h3>Syllabary</h3>
                    <SyllabarySelector bind:kata={gameType} />
                </div>
            </div>
            <button class="success big" on:click={startGame}>Start</button>
        </div>
    {/if}
{/await}
