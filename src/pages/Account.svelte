<script>
    import { navigate } from "svelte-routing";
    import userStore from "../store/user";
    export let value = "";

    function onLogin() {
        userStore.login(value);
        navigate("/");
    }
</script>

{#if !Boolean($userStore.user)}
    <div class="f1 f cc">
        <h2>Nise no Tori</h2>
        <form on:submit|preventDefault={onLogin} class="f cc g_5">
            <input type="text" bind:value required minlength="3" />
            <button type="submit">Login</button>
        </form>
    </div>
{:else}
    <div class="f1 f cc">
        <button class="small danger" on:click={() => userStore.logout()}>
            Logout
        </button>
    </div>
{/if}
