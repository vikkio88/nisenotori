<script>
  export let selected = null;
  export let options = [];
  export let keyCheck = "value";
  export let keyValue = "value";
</script>

<select
  on:change={(e) => {
    selected = e.currentTarget.value;
  }}
>
  {#each options as option}
    <option
      selected={(option[keyCheck] ?? option) == selected}
      value={option[keyValue] ?? option}
    >
      {option.label ?? option}
    </option>
  {/each}
</select>

<style>
  select {
    padding: 0.8rem;
  }
</style>
