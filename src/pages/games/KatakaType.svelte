<script>
    import { loadWords } from "../../libs/fetch";

    let wordsP = loadWords();
</script>

{#await wordsP}
    <h2>Loading</h2>
{:then words}
    <h3>Loaded</h3>
{/await}
