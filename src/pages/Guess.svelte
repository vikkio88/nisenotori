<script>
  import Game from "../games/Guess.svelte";
  let gameStarted = false;
</script>

{#if !gameStarted}
  <h1>Guess Game</h1>
  <div class="f1 f cc">
    <button class="success big" on:click={() => (gameStarted = true)}>
      Start
    </button>
  </div>
{:else}
  <Game />
{/if}
