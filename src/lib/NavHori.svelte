<script lang="ts">
	import { storage } from './stores';

	export let title = 'Untitled';

	const css = [
		`background: url('assets/banner_${$storage.option}.png');`,
		'background-size: cover'
	];
</script>

<nav style="{css.join('')}">
    <div id="currency">{$storage.concurrency} pts</div>
    <div id="title" on:click={() => $storage.option = Option.None}>{title}</div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        padding: 0.5em
        height: 3em
        background-size: cover
    nav > div
        display: flex
        justify-content: center
        align-items: center
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