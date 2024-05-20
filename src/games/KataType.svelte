<script>
    import { KATAKANA } from "../libs/data/consts";
    import { GameResult } from "./utils/gameResult";
    import { checkGuess, getNextTypingQuiz } from "./utils/typing";
    import audioInstance, { SOUNDS } from "../libs/audio";

    const audio = audioInstance();
    export let words = [];
    export let kana = KATAKANA;
    export let mute = false;

    export let end = () => console.log("end");
    export let restart = () => console.log("restart");

    let gameOver = false;

    let currentQuiz = getNextTypingQuiz(words, kana);
    let currentGuess = [];
    let showingResult = false;
    let correctGuess = false;
    let finalResult = new GameResult();

    function guess() {
        const isCorrect = checkGuess(currentGuess, currentQuiz);
        if (isCorrect) {
            !mute && audio.play(SOUNDS.BEEP);
            finalResult.markCorrect();
        } else {
            !mute && audio.play(SOUNDS.BOBOP);
            finalResult.markWrong();
        }
        showingResult = true;
        correctGuess = isCorrect;
        finalResult = finalResult;
        setTimeout(
            () => {
                words = words.filter((w) => w.word != currentQuiz.word.word);
                currentQuiz = getNextTypingQuiz(words, kana);
                currentGuess = [];
                if (currentQuiz.word == undefined) {
                    gameOver = true;
                    return;
                }
                showingResult = false;
            },
            isCorrect ? 1500 : 2500,
        );
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
    <meter value={finalResult.total()} max={words.length} min="1" />
    <div class="f1 f cc">
        <h1>{words.length}</h1>
        <h2>{currentQuiz.word.meaning}</h2>
        {#if showingResult}
            <h1
                class="answer anim_pulse"
                class:correct={correctGuess}
                class:wrong={!correctGuess}
            >
                {currentQuiz.word.word}
            </h1>
        {:else}
            <h1>{currentQuiz.word.romaji.split(" ").join("")}</h1>
        {/if}
        <div class="f rc g_5 guesses">
            {#each currentGuess as guess}
                <button
                    class="transparent"
                    disabled={showingResult}
                    on:click={() => removeGuess(guess)}
                >
                    {guess}
                </button>
            {/each}
        </div>
        <div class="fiwr g">
            {#each currentQuiz.guesses as guess}
                <button
                    on:click={() => addGuess(guess)}
                    disabled={currentGuess.length >
                        currentQuiz.word.syllables.length + 1 || showingResult}
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
            disabled={currentGuess.length < 1 || showingResult}
        >
            Guess
        </button>
    </div>
{:else}
    <div class="f1 f cc">
        <h2>Finished</h2>
        <h2 class="mg">
            Correct: {finalResult.result().correct} Wrong: {finalResult.result()
                .wrong}
        </h2>
        <div class="fic g_5">
            <button class="success" on:click={restart}>Restart</button>
            <button class="danger" on:click={end}>End</button>
        </div>
    </div>
{/if}

<style>
    .correct {
        color: var(--success-color);
    }
    .wrong {
        color: var(--danger-color);
    }
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

    meter {
        width: 80vw;
    }
</style>
