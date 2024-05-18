<script>
    import { byRandom } from "./utils/shared";

    export let words = [];
    export let end = () => console.log("end");
    export let restart = () => console.log("restart");

    let gameOver = false;

    let currentWord = words.pop();

    function next() {
        words = words.sort(byRandom);
        currentWord = words.pop();
        if (currentWord == undefined) {
            gameOver = true;
            return;
        }
    }
</script>

{#if !gameOver}
    <div class="f1 f cc">
        <h1>{words.length}</h1>
        <pre>{JSON.stringify(currentWord, null, 2)}</pre>
    </div>
    <div class="f rs">
        <button class="success" on:click={next}>Next</button>
    </div>
{:else}
    <div class="f1 f cc">
        <button class="success" on:click={restart}>Restart</button>
        <button class="danger" on:click={end}>End</button>
    </div>
{/if}
