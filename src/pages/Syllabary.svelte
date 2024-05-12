<script>
  import { navigate } from "svelte-routing";
  import Symbol from "../components/Symbol.svelte";
  import SyllabarySelector from "../components/shared/SyllabarySelector.svelte";
  import {
    A,
    K,
    S,
    T,
    N,
    H,
    M,
    Y,
    R,
    W,
    n,
    G,
    Z,
    D,
    B,
    P,
  } from "../libs/data/charSets";
  import { HIRAGANA, KATAKANA, ROMAJI } from "../libs/data/consts";
  import { KATA_MAP } from "../libs/data/kataMap";

  const baseRows = [
    A,
    K,
    S,
    T,
    N,
    H,
    M,
    [Y[0], null, Y[1], null, Y[2]],
    R,
    [W[0], null, null, null, W[1]],
    [n, null, null, null, null],
  ];

  const dakuonRows = [G, Z, D, B, P];

  let baseRowsView = [...baseRows];
  let dakuonRowsView = [...dakuonRows];
  let filterTxt = "";
  function onFilter() {
    dakuonRowsView = [...dakuonRows];
    baseRowsView = [...baseRows];

    if (Boolean(filterTxt)) {
      // @ts-ignore
      baseRowsView = baseRowsView.map((r) =>
        r.filter((l) => l && l.includes(filterTxt.toLowerCase())),
      );
      dakuonRowsView = dakuonRowsView.map((r) =>
        r.filter((l) => l && l.includes(filterTxt.toLowerCase())),
      );
    }
  }

  let romaji = true;
  let kata = HIRAGANA;
</script>

<h1>{kata}</h1>
<div class="f r g">
  <div class="f cc g_5 mg_5">
    <SyllabarySelector bind:kata />
  </div>

  <div class="f rc g_5 mg_5">
    <label class="tt-cpz" for="romaji">{ROMAJI}</label>
    <input type="checkbox" name="romaji" bind:checked={romaji} />
  </div>
</div>

<div class="f r">
  <input
    type="text"
    bind:value={filterTxt}
    on:input={onFilter}
    placeholder="Filter syllables..."
  />
  <button
    class="danger"
    disabled={!Boolean(filterTxt)}
    on:click={() => (filterTxt = "")}
  >
    Reset
  </button>
</div>

<h2>Base</h2>
{#each baseRowsView as row}
  <div class="f r row">
    {#each row as syllable}
      <div class="f1 f c item">
        {#if syllable}
          <Symbol
            button
            on:click={() => navigate(`/${kata}/${KATA_MAP[syllable].romaji}`)}
            hiragana={kata === HIRAGANA}
            katakana={kata === KATAKANA}
            kata={KATA_MAP[syllable]}
            {romaji}
          />
        {:else}
          <div class="spacer" />
        {/if}
      </div>
    {/each}
  </div>
{/each}
<h2>Dakuon / Handakuon</h2>
{#each dakuonRowsView as row}
  <div class="f r row">
    {#each row as syllable}
      <div class="f1 f c item">
        <Symbol
          button
          on:click={() => navigate(`/${kata}/${KATA_MAP[syllable].romaji}`)}
          hiragana={kata === HIRAGANA}
          katakana={kata === KATAKANA}
          kata={KATA_MAP[syllable]}
          {romaji}
        />
      </div>
    {/each}
  </div>
{/each}

<style>
  h1 {
    text-transform: capitalize;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .spacer {
    padding: 2.35rem;
  }

  .row {
    margin-top: .5rem;
  }

  .item + .item {
    margin-left: .1rem;
  }
</style>
