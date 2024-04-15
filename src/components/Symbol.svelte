<script>
    export let kata = null;
    export let hiragana = true;
    export let katakana = false;
    export let romanji = false;


    export let small = false;
</script>

{#if !Boolean(kata)}
    <div />
{:else}
    <div class="symbol f cc">
        {#if romanji}
            <span>{kata.romanjiLabel || kata.romanji}</span>
        {/if}
        <h1 class:small>
            {#if hiragana}
                {kata.hiragana}
            {:else if katakana}
                {kata.katakana}
            {:else}
                {kata.hiragana}
            {/if}
        </h1>
    </div>
{/if}

<style>
    div.symbol {
        border: var(--borders);
        border-radius: var(--border-radius);
        padding: 1rem 2rem;
    }

    h1 {
        font-size: 3.5rem;
    }

    .small {
        font-size: 1.2rem;
    }
</style>
