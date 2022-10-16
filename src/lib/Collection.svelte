<script lang="ts">
    import { storage } from './stores';

    $: style = `background: url(assets/card_${$storage.option}.svg) no-repeat;`;
    let selected = '';
    // .large-card
    //     padding: $pad
    //     align-items: center
    //     width: 30em
    //     height: 30em / 3 * 4 + $pad
    //     width: 100%
    // .large-name
    // .large-content
    //     padding-left: 1em
    //     flex: 1
    //     display: flex
    //     align-items: center
    //     img, .cal
    //         padding-right: 0.25em
    //     img
    //         width: 2em
    //     .name
    //         flex: 2
    //         text-shadow: 0.2em 0.2em 0.4em #000000
    //     .cal
    //         text-align: right
    //         flex: 1


</script>

<section>
    {#each $storage.collection as { name, calories, nutrients, type, src, ingredients, steps }}
    {#if !selected }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="card" {style} on:click={() => selected = name}>
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
    {:else if selected === name }
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="large-card" {style} on:click={() => selected = ''}>
                <div class="large-header">
                    <span class="large-name">{name}</span>
                    <span class="large-cal">{calories} cal.</span>
                    <!-- <img class="large-img" src="{type}" alt=""> -->
                </div>
                <div class="footer">
                    {#each ingredients as { name, value, unit }}
                        <div>{name}: {value} {unit}</div>
                    {/each}
                </div>
            </div>
    {/if}
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
        padding-top: 3em
        display: grid
    $pad: 1em
    $width: 15em
    .card
        padding: $pad
        flex-direction: column
        width: $width
        height: $width / 3 * 4 + $pad
        cursor: pointer

    .large-card
        padding: 2em
        flex-direction: column
        width: $width * 3
        height: $width * 4
        cursor: pointer


    .large-header
        padding-left: 2em
        flex: 1
        display: flex
        align-items: center
        img, .cal
            padding-right: 0.25em
        img
            width: 2em
    .large-name
        font-size: 2.5em
        margin-top: -3.7em
        margin
        flex: 2
        text-shadow: 0.2em 0.2em 0.4em #000000
    .large-cal
        text-align: right
        flex: 1
        font-size: 2.5em
        margin-top: -3.7em
    .large-content
        padding: 0 1em
    
        
</style>
