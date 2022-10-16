<script lang="ts">
    import { info } from './info';
    import { storage } from './stores';
    import Background from './Background.svelte';
</script>

<Background prefix="info_" ext="png"/>
<section id="info">
    {#each Object.entries(info) as [k, { content, src }], i}
        <div class="row" class:rtl={i%2}>
            <div class="text">
                <div class="title">{k}</div>
                <div class="content">{content}</div>
            </div>
            <div><img src="{src.replace('%s', $storage.option)}"></div>
        </div>
    {/each}
</section>

<style lang="sass">
    @use  '../vars' as *
    @media (orientation: portrait)
        .row > div:not(.text)
            display: none
    :global(main.lose #info)
        color: white
        text-shadow: $shadow $shadow $shadow #000000
    section
        line-height: 1.5
        width: 100%
        font-size: 2em
    img
        width: 100%
    .rtl
        direction: rtl
    .title
        font-size: 2em
        font-weight: bold
    .row
        display: flex
        & > div
            flex: 1
            padding: 1em
    .text
        display: flex
        flex-direction: column
        & > div
            direction: ltr

</style>

