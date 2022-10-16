<script lang="ts">
    import { info } from './info';
    import { storage } from './stores';
</script>

<section>
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
    @media (orientation: portrait)
        .row > div:not(.text)
            display: none
    section
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

