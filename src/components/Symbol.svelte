<script>
    export let kata = null;
    export let hiragana = false;
    export let katakana = false;
    export let romanji = false;

    export let small = false;
</script>

{#if !Boolean(kata)}
    <div />
{:else}
    <div class="symbol f cc" class:small>
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
        padding: .5rem 1rem;
    }

    h1 {
        font-size: 2.5rem;
    }

    h1.small {
        font-size: 1.3rem;
    }
    div.small {
        padding: 0.5rem 1rem;
    }
</style>
