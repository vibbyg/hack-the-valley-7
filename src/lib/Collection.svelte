<script lang="ts">
    import { storage } from './stores';
    import { blur } from "svelte/transition";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    $: style = `background: url(assets/card_${$storage.option}.svg) no-repeat;`;
    let selected = '';
</script>

<section>
    {#each $storage.collection as { name, calories, nutrients, type, src, ingredients, steps }}
    {#if !selected }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="card" {style} transition:blur="{{delay: 300, duration: 1000}}" on:click={() => selected = name}>
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
            <div class="large-card" {style} transition:blur="{{delay: 300, duration: 1000}}" on:click={() => selected = ''}>
                <div class="large-header">
                    <span class="name">{name}</span>
                    <span class="cal">{calories} cal.</span>
                    <img class="large-img" src="{src}" alt=""> 
                </div>
                <div class="large-footer">
                    <h3>Ingredients:<br></h3>
                    {#each ingredients as { name, value, unit }}
                        <div>{name}: {value} {unit}</div>
                    {/each}
                    <h3>Steps:<br></h3>
                    {#each steps.slice(0, 4) as step}
                        <ul>
                            <li>{step}</li>
                        </ul>
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
        position: absolute
        flex: 5
        padding-top: 2em
        padding-left: 2.5em
        display: inline-flex
        flex-direction: column
        align-items: stretch
        width: $width * 2.9
        height: $width * 4
        cursor: pointer


    .large-header
        margin-right: 2em
        flex: 1
        display: flex
        flex-direction: row
        align-items: center
        img, .cal
            flex: 1
            padding-right: 0.2em
            padding-top: 0.2em
            text-align: right
            font-size: 1.8em
        img
            width: 0.4em
            padding-right: 0.4em
        .name
            color: white
            padding-left: 0.25em
            font-size: 2.5em
            flex: 3
            text-shadow: 0.2em 0.2em 0.4em #000000
        
    .large-footer
        flex: 6
        padding-left: 1em
        padding-right: 4em
        display: flex
        flex-direction: column

</style>
