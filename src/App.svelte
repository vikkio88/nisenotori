<script>
  import { Router, Route } from "svelte-routing";
  import Dash from "./pages/Dash.svelte";
  import Cards from "./pages/Cards.svelte";
  import Syllabary from "./pages/Syllabary.svelte";
  import Kata from "./pages/Kata.svelte";
  import { HIRAGANA, KATAKANA } from "./libs/data/consts";
  import Guess from "./pages/Guess.svelte";
  import createUserStore from "./store/user";

  let url = "";
  let userStore = createUserStore();
</script>

<main class="f cs">
  {#if Boolean($userStore.user)}
    <h3>{$userStore.user.name}</h3>
    <button class="small danger" on:click={() => userStore.logout()}>Logout</button>
  {:else}
    <button class="small success" on:click={() => userStore.login('User')}>
      Login
    </button>
  {/if}
  <Router {url}>
    <Route path="/" component={Dash} />
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
  </Router>
</main>

<style>
</style>
