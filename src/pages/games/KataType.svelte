<script>
    import { navigate } from "svelte-routing";
    import Spinner from "../../components/shared/Spinner.svelte";
    import Game from "../../games/KataType.svelte";
    import { TYPING_GAMES } from "../../games/utils/typing";
    import { loadWords } from "../../libs/fetch";
    import SyllabarySelector from "../../components/shared/SyllabarySelector.svelte";
    import { HIRAGANA } from "../../libs/data/consts";

    let wordsP = loadWords();

    function startGame() {
        gameStarted = true;
    }

    let gameStarted = false;

    let gameType = TYPING_GAMES.KATAKANA;
    let mute = true;
    let wordCount = 10;

    function getMaxWords(words, gameType) {
        return gameType === HIRAGANA
            ? words.hiraganaWords.length
            : words.katakanaWords.length;
    }
</script>

<h1>KataType</h1>
{#await wordsP}
    <div class="f cc f1">
        <Spinner />
    </div>
{:then words}
    {#if gameStarted}
        <Game
            {mute}
            words={gameType === TYPING_GAMES.HIRAGANA
                ? words.hiraganaWords.slice(0, wordCount)
                : words.katakanaWords.slice(0, wordCount)}
            kana={gameType}
            restart={() => (gameStarted = false)}
            end={() => navigate("/", { replace: true })}
        />
    {:else}
        <div class="f1 f cc g">
            <div class="f cc g2 m">
                <div class="f cc g_5">
                    <h3>Syllabary</h3>
                    <SyllabarySelector bind:kata={gameType} />
                </div>
                <div class="f cc g_5">
                    <h3>Words</h3>
                    <label for="range">
                        {wordCount} / {getMaxWords(words, gameType)}
                    </label>
                    <input
                        type="range"
                        name="range"
                        bind:value={wordCount}
                        min="2"
                        step="1"
                        max={getMaxWords(words, gameType)}
                    />
                </div>
            </div>
            <div class="f cc g_5 mg">
                <h3>Game Options</h3>
                <div class="f r g_5">
                    <label for="audio">Mute Audio</label>
                    <input type="checkbox" name="audio" bind:checked={mute} />
                </div>
            </div>
        </div>
        <div class="f cc">
            <button class="success big" on:click={startGame}>Start</button>
        </div>
    {/if}
{/await}
