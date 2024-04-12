<script>
  import { Router, Route } from "svelte-routing";
  import Dash from "./pages/Dash.svelte";
  import Cards from "./pages/Cards.svelte";


  let url = "";
</script>

<main class="f cs">
<Router {url}>
  <Route path="/" component={Dash} />
  <Route path="/cards" component={Cards} />
</Router>
  
  
</main>

<style>
</style>
