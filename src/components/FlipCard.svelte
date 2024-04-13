<script>
    export let kata = null;
    export let hiragana = true;
    export let katakana = false;
    export let flipped = false;
</script>

<div class="flipCard">
    <div class="flipCard-inner" class:flipped>
        <div class="flipCard-front f cc">
            <h1>
                {#if hiragana}
                    {kata.hiragana}
                {:else if katakana}
                    {kata.katakana}
                {:else}
                    {kata.hiragana}
                {/if}
            </h1>
        </div>
        <div class="flipCard-back f cc">
            {#if flipped}
                <h2>{kata.romanjiLabel || kata.romanji}</h2>
            {/if}
        </div>
    </div>
</div>

<style>
    .flipCard {
        background-color: transparent;
        width: 150px;
        height: 190px;
        perspective: 1000px;
    }

    .flipCard-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
    }

    .flipped {
        transform: rotateY(180deg);
    }

    .flipCard-front,
    .flipCard-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: var(--border-radius);
    }

    .flipCard-front {
        color: white;
        background-color: var(--accent-color);
    }

    .flipCard-back {
        background-color: var(--accent-v1-color);
        color: white;
        transform: rotateY(180deg);
    }

    h1 {
        font-size: 3.2rem;
    }
    h2 {
        font-size: 3rem;
    }
</style>
