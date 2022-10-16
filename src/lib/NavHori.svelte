<script lang="ts">
    import { storage } from './stores';
    import { Option } from './storage';

    export let title = 'Untitled';

	let style = `background: url(assets/banner_${$storage.option}.png); background-size: cover;`;
    let searchTerm = ''
</script>

<nav {style}>
    <div id="currency">{$storage.currency} pts</div>
    <div id="title" on:click={() => $storage.option = Option.None}>{title}</div>
    <div id="spacer"></div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        height: $nav
        z-index: 999
    nav > div
        display: flex
        justify-content: center
        align-items: center
        margin: 0.5em
    #currency
        flex: 2
        background-color: $background
        color: var(--theme)
        border-radius: 10px
        white-space: nowrap
    #title
        color: white
        flex: 7
    #spacer
        flex: 2
    #search input
        padding: 0.7em
        font-size: 0.7em

</style>
