<script>
  import { navigate } from "svelte-routing";
</script>

<h1>Nise no tori</h1>

<div class="f cc f1 g">
  <button on:click={() => navigate("/cards", { replace: true })}>Cards</button>
  <button disabled>Guess</button>
</div>
