<script lang="ts">
    import { storage } from './stores';

    $: style = `background: url(assets/card_${$storage.option}.svg) no-repeat;`;

    let name = "Card name";
    let calories = 500;
    let nutrients = [{name: "nutrient", value: 69, unit: "GB"},
    {name: "nutrient", value: 69, unit: "TB"},{name: "nutrient", value: 69, unit: "MB"},
    {name: "nutrient", value: 69, unit: "PB"}];
    let type = 'assets/meal.png';
    let src = "assets/dummy.png";
</script>

<div class="card" {style}>
    <div class="header">
        <span class="name">{name}</span>
        <span class="cal">{calories} cal.</span>
        <img src="{type}" alt="">
    </div>
    <div class="photo"><img src="{src}" alt=""></div>
    <div class="footer">
        {#each nutrients.slice(3, 5) as { name, value, unit }}
            <div>{name}: {value} {unit}<br></div>
        {/each}
    </div>
</div>

<style lang="sass">
    @use '../vars' as *
    div
        display: flex
    .cal, .footer
        font-size: 0.9em
        color: $background
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
            text-shadow: 0.2em 0.2em 0.4em #000000
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
</style>
