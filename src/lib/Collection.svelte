<script lang="ts">
	import { storage } from './stores';

	const style = `background: url(assets/card_${$storage.option}.svg) no-repeat;`;
</script>

<section>
    {#each $storage.collection as { name, calories, nutrients, type, src }}
        <div class="card" {style}>
            <div class="header">
                <span class="name">{name}</span>
                <span class="cal">{calories} cal.</span>
                <img src="{type}" alt="">
            </div>
            <div class="photo"></div>
            <div class="footer">
                {#each nutrients as { name, value, unit }}
                    <div>{name}: {value} {unit}</div>
                {/each}
            </div>
        </div>
    {/each}
</section>

<style lang="sass">
    @use '../vars' as *
    $dur: 200ms
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
    .footer
        padding: 0 1em
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
        .cal
            text-align: right
            flex: 1
    .photo
        flex: 6
    .footer
        flex: 2
        padding-top: 3em
        display: grid
        grid-template-columns: 1fr 1fr

    $pad: 1em
    $width: 15em
    .card
        padding: $pad
        flex-direction: column
        width: $width
        height: $width / 3 * 4 + $pad
</style>
