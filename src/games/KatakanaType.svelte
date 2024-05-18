<script>
    import { KATAKANA } from "../libs/data/consts";
    import { getNextTypingQuiz } from "./utils/typing";

    export let words = [];
    export let kana = KATAKANA;

    export let end = () => console.log("end");
    export let restart = () => console.log("restart");

    let gameOver = false;

    let currentQuiz = getNextTypingQuiz(words, kana);
    let currentGuess = [];

    function guess() {
        console.log(currentGuess, currentQuiz.word.syllables);

        words = words.filter((w) => w.word != currentQuiz.word.word);
        currentQuiz = getNextTypingQuiz(words, kana);
        currentGuess = [];
        if (currentQuiz.word == undefined) {
            gameOver = true;
            return;
        }
    }

    function addGuess(syllable) {
        currentGuess.push(syllable);
        currentGuess = currentGuess;
    }

    function removeGuess(syllable) {
        currentGuess = currentGuess.filter((s) => s != syllable);
    }
</script>

{#if !gameOver}
    <div class="f1 f cc">
        <h1>{words.length}</h1>
        <h2>{currentQuiz.word.meaning}</h2>
        <h1>{currentQuiz.word.romaji.split(" ").join("")}</h1>
        <div class="f rc g_5 guesses">
            {#each currentGuess as guess}
                <button class="transparent" on:click={() => removeGuess(guess)}>
                    {guess}
                </button>
            {/each}
        </div>
        <div class="fiwr g">
            {#each currentQuiz.guesses as guess}
                <button
                    on:click={() => addGuess(guess)}
                    disabled={currentGuess.length >
                        currentQuiz.word.syllables.length + 1}
                >
                    {guess}
                </button>
            {/each}
        </div>
    </div>
    <div class="f rs">
        <button
            class="big success"
            on:click={guess}
            disabled={currentGuess.length < 1}
        >
            Guess
        </button>
    </div>
{:else}
    <div class="f1 f cc">
        <button class="success" on:click={restart}>Restart</button>
        <button class="danger" on:click={end}>End</button>
    </div>
{/if}

<style>
    .guesses {
        min-height: 100px;
        min-width: 250px;
        flex-wrap: wrap;
        padding: 1rem;
        border: var(--borders-dashed);
        border-radius: var(--border-radius);
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>
