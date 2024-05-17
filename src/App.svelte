<script>
  import { Router, Route } from "svelte-routing";
  import Dash from "./pages/Dash.svelte";
  import Cards from "./pages/games/Cards.svelte";
  import Syllabary from "./pages/Syllabary.svelte";
  import Kata from "./pages/Kata.svelte";
  import { HIRAGANA, KATAKANA } from "./libs/data/consts";
  import Guess from "./pages/games/Guess.svelte";
  import Account from "./pages/Account.svelte";
  import KatakaType from "./pages/games/KatakaType.svelte";

  let url = "";
</script>

<main class="f cs">
  <Router {url}>
    <Route path="/" component={Dash} />
    <Route path="/account" component={Account} />

    <!-- Learning -->
    <Route path="/syllabary" component={Syllabary} />
    <Route path="/hiragana/:romaji" let:params>
      <Kata romaji={params.romaji} kata={HIRAGANA} />
    </Route>
    <Route path="/katakana/:romaji" let:params>
      <Kata romaji={params.romaji} kata={KATAKANA} />
    </Route>

    <!-- Games -->
    <Route path="/cards" component={Cards} />
    <Route path="/guess" component={Guess} />
    <Route path="/katakatype" component={KatakaType} />
  </Router>
</main>

<style>
</style>
