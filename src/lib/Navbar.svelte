<script lang="ts">
	import { storage } from './stores';
	let title = 'Tit';
</script>

<nav>
    <div id="spacer1"></div>
    <div id="currency">{$storage.concurrency}</div>
    <div id="title">{title}</div>
    <div id="spacer2"></div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        background-color: var(--theme)

    #spacer1
        flex: 1

    #currency
        background-color: $background
        color: var(--theme)
        text-align: center
        border-radius: 10px
        margin: 10px
        padding: 10px
        flex: 2

    #title
        text-align: center
        margin: 10px 100px
        padding: 10px
        flex: 7

    #spacer2
        flex: 3
</style>
