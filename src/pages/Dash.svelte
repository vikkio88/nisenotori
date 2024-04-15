<script>
  import { navigate } from "svelte-routing";
</script>

<h1 title="偽の鳥">Nise no tori</h1>
<h2 title="Fake Bird">偽の鳥</h2>

<div class="f cc f1 g">
  <button class="big" on:click={() => navigate("/cards", { replace: true })}>
    Cards
  </button>
  <button class="big" disabled>Guess</button>
</div>
