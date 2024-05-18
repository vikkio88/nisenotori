<script>
    export let words = [];
    export let end = () => console.log("end");
    export let restart = () => console.log("restart");

    let gameOver = false;
</script>

{#if !gameOver}
    <div class="f1 f cc">
        <pre>{JSON.stringify(words[0], null, 2)}</pre>
    </div>
{:else}
    <div class="f1 f cc">
        <button class="success" on:click={restart}>Restart</button>
        <button class="danger" on:click={end}>End</button>
    </div>
{/if}
