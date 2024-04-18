<script>
  import { Router, Route } from "svelte-routing";
  import Dash from "./pages/Dash.svelte";
  import Cards from "./pages/Cards.svelte";
  import Syllabary from "./pages/Syllabary.svelte";
  import Kata from "./pages/Kata.svelte";
  import { HIRAGANA, KATAKANA } from "./libs/data/consts";

  let url = "";
</script>

<main class="f cs">
  <Router {url}>
    <Route path="/" component={Dash} />
    <Route path="/syllabary" component={Syllabary} />

    <Route path="/hiragana/:romaji" let:params>
      <Kata romaji={params.romaji} kata={HIRAGANA} />
    </Route>
    <Route path="/katakana/:romaji" let:params>
      <Kata romaji={params.romaji} kata={KATAKANA} />
    </Route>
    <Route path="/cards" component={Cards} />
  </Router>
</main>

<style>
</style>
