<script>
  import { navigate } from "svelte-routing";
  import userStore from "../store/user";
</script>

<button
  class="n-btn badge"
  on:click={() => navigate("/account")}
  class:loggedin={Boolean($userStore.user)}
>
  <div>
    {#if Boolean($userStore.user)}
      {$userStore.user.name.slice(0, 1)}
    {:else}
      👤
    {/if}
  </div>
</button>

<style>
  .badge {
    align-items: center;
    font-size: 0.7rem;
    padding: 0.33rem 0.45rem;
    border-radius: 800px;
    border: var(--borders);
    border-color: var(--main-font-color);
    text-align: center;
  }
  .badge > div {
    display: flex;
    justify-content: center;
  }

  .badge:hover {
    background-color: var(--main-font-color);
  }

  .loggedin {
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
    color: var(--main-bg-color);
    background-color: var(--accent-faint-color);
  }

  .loggedin:hover {
    color: var(--main-bg-color);
  }
</style>
