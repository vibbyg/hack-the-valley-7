<script lang="ts">
	import { storage } from './stores';

	export let selected: string;
	function click({ target: { title } }: { target: HTMLElement }){
		console.debug('click on', title);
		selected = title;
	}
</script>

<nav style="background: url('assets/banner_{$storage.option}.png')">
    <div class="material-icons-round" title="Home" on:click={click}>home</div>
    <div id="currency">{$storage.concurrency} pts</div>
    <div id="title">{selected}</div>
    <div class="material-icons-round" title="Gacha" on:click={click}>cached
    </div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        justify-content: center
        align-items: center

    .material-icons-round
        flex: 1
        font-size: 2em
        display: flex
        justify-content: center
        align-items: center

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
        margin: 10px
        padding: 10px
        flex: 7
</style>
