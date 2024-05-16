<script>
    import { navigate } from "svelte-routing";
    import userStore from "../store/user";
</script>

{#if Boolean($userStore.user)}
    👤
    <h3>{$userStore.user.name}</h3>
{:else}
    <button class="small success" on:click={() => navigate("/account")}>
        👤
    </button>
{/if}
