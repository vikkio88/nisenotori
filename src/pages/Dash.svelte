<script>
  import { navigate } from "svelte-routing";
</script>

<h1>Nise no tori</h1>

<div class="f cc f1 g">
  <button class="big" on:click={() => navigate("/cards", { replace: true })}
    >Cards</button
  >
  <button class="big" disabled>Guess</button>
</div>
