<script lang="ts">
	import { storage } from './stores';
	const style = `background: url(assets/card_${$storage.option}.svg) no-repeat;`
</script>

<section>
    {#each $storage.collection as {name, calories, nutrients, type, src}}
        <div {style}>
            <span>{name}</span>
            <span>{calories} Calories</span>
            <img src="{type}" alt="">
        </div>
    {/each}
</section>

<style lang="sass">
    $dur: 200ms
    $width: 18em
    section
        padding: 1em
        display: grid
        gap: 1em
        grid-template-columns: repeat(auto-fill, minmax(18em, 1fr))
    @media (orientation: portrait)
        section
            grid-template-columns: 1fr
    div
        display: flex
        flex-direction: column
        width: $width
        height: $width / 3 * 4
</style>
