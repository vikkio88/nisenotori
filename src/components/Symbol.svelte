<script>
  export let button = false;
  export let kata = {};
  export let hiragana = false;
  export let katakana = false;
  export let romaji = false;

  export let small = false;
</script>

{#if !Boolean(kata)}
  <div />
{:else if button}
  <button class="symbol ta-c" class:small on:click>
    <div class="f cc">
      {#if romaji}
        <span>{kata.romajiLabel || kata.romaji}</span>
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
  </button>
{:else}
  <div class="symbol f cc" class:small>
    {#if romaji}
      <span>{kata.romajiLabel || kata.romaji}</span>
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
  button.symbol {
    all: unset;
    border: var(--borders);
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
  }

  div.symbol {
    border: var(--borders);
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
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
