<script>
    import { navigate } from "svelte-routing";
    import Spinner from "../../components/shared/Spinner.svelte";
    import KatakanaType from "../../games/KatakanaType.svelte";
    import { TYPING_GAMES } from "../../games/utils/typing";
    import { loadWords } from "../../libs/fetch";

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
                ? words.hiraganaWords
                : words.katakanaWords.slice(0, 5)}
            restart={() => (gameStarted = false)}
            end={() => navigate("/", { replace: true })}
        />
    {:else}
        <div class="f1 f cc">
            <button class="success big" on:click={startGame}>Start</button>
        </div>
    {/if}
{/await}
