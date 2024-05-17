<script>
  import { navigate } from "svelte-routing";
  import userStore from "../store/user";
  import Title from "../components/shared/Title.svelte";
  import Confirm from "../components/shared/Confirm.svelte";
  export let value = "";

  function onLogin() {
    userStore.login(value);
    navigate("/");
  }

  function onLogout() {
    userStore.logout();
    navigate("/");
  }
</script>

<Title />
{#if !Boolean($userStore.user)}
  <div class="f1 f cc g">
    <h3>Create User</h3>
    <form on:submit|preventDefault={onLogin} class="f cc g_5 login">
      <input
        type="text"
        bind:value
        required
        minlength="3"
        placeholder="Username"
        class="ta-c"
      />
      <button type="submit">Login</button>
    </form>
  </div>
{:else}
  <div class="f1 f cs g account">
    <h1>👤 {$userStore.user.name}</h1>

    <div class="dangerZone f cs g">
      <h3 class="danger">Danger Zone</h3>
      <strong>Logging out will remove all your stats.</strong>
      <Confirm classes="danger" subClasses="transparent" onConfirmed={onLogout}
        >Logout</Confirm
      >
    </div>
  </div>
{/if}

<style>
  .account {
    margin-top: 2rem;
  }
  .login {
    padding: 2rem 3rem;
    border: var(--borders);
    border-radius: var(--border-radius);
  }
  .dangerZone {
    padding: 0.25rem 6rem 1rem 6rem;
    border: var(--borders-dashed-danger);
    border-radius: var(--border-radius);
  }
</style>
