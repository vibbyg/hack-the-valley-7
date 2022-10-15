<script lang="ts">
	import { storage } from './stores';
	import { Option } from './storage';

	export let title = 'Untitled';

</script>

<nav>
    <div id="currency">{$storage.concurrency} pts</div>
    <div id="title" on:click={() => $storage.option = Option.None}>{title}</div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        height: $nav
        background-size: cover
        background: var(--banner)
        background-size: cover
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
        text-align: center
        flex: 7
</style>