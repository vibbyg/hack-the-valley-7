<script lang="ts">
	import { storage } from './stores';
	import { Option } from './storage';

	export let selected: string;

	function click({ target: { title } }: { target: HTMLElement }){
		console.debug('click on', title);
		selected = title;
	}

	const css = [
		`background: url('assets/banner_${$storage.option}.png');`,
		'background-size: cover'
	];
	const titles = {
		[Option.LoseFat]: 'Lose Fat',
		[Option.GainWeight]: 'Gain Weight',
	};
	$: title = selected == 'Home' ? titles[$storage.option] : selected;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<nav style="{css.join('')}">
    <div class="material-icons-round" title="Home" on:click={click}>home</div>
    <div id="currency">{$storage.concurrency} pts</div>
    <div id="title" on:click={() => $storage.option = Option.None}>{title}</div>
    <div class="material-icons-round" title="Gacha" on:click={click}>cached
    </div>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        justify-content: center
        align-items: center
        background-size: cover
        padding: 0.2em

    .material-icons-round
        flex: 1
        font-size: 2em
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer

    #currency
        background-color: $background
        color: var(--theme)
        text-align: center
        border-radius: 10px
        flex: 2
        white-space: nowrap
        padding: 0.5em
        margin-left: 0.5em

    #title
        text-align: center
        flex: 7
</style>
