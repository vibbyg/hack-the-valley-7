<script lang="ts">
    import { storage } from './stores';
    import type { Recipe } from './storage';

    $: style = `background: url(assets/card_${$storage.option}.svg) no-repeat;`;

    export let name: string;
    export let recipe: Recipe;
</script>

<div class="card" {style}>
    <div class="header">
        <span class="name">{name}</span>
        <span class="cal">{recipe.calories} cal.</span>
        <img src="{recipe.type}" alt="">
    </div>
    <div class="photo"><img src="{recipe.src}" alt=""></div>
    <div class="footer">
        {#each Object.entries(recipe.nutrients).slice(0, 3) as [name, nutrients]}
            <div>{name}: {nutrients.value} {nutrients.unit}<br>
            </div>
        {/each}
    </div>
</div>

<style lang="sass">
    @use '../vars' as *
    div
        display: flex
    .cal, .footer
        font-size: 0.9em
        color: $color
    .header
        padding-left: 1em
        flex: 1
        display: flex
        align-items: center
        img, .cal
            padding-right: 0.25em
        img
            width: 2em
        .name
            flex: 2
            color: white
            text-shadow: 0.2em 0.2em 0.4em #000
        .cal
            text-align: right
            flex: 1
    .photo
        flex: 6
        align-items: center
        justify-content: center
        img
            object-fit: cover
            width: auto
            height: auto
            max-width: 300px
            max-height: 300px
    .footer
        flex: 2
        padding: 3em 1em 0
        display: grid
    $pad: 1em
    $width: 15em
    .card
        font-size: 24px
        padding: $pad
        flex-direction: column
        width: $width
        height: calc($width / 3 * 4 + $pad)
        cursor: pointer
</style>
