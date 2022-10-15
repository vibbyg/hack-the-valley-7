<script lang="ts">
	import { storage } from './stores';
	import { Option } from './storage';

	export let selected: string;

	function click({ target: { title } }: { target: HTMLElement }){
		console.debug('click on', title);
		selected = title;
	}

	const titles = {
		[Option.LoseFat]: 'Lose Fat',
		[Option.GainWeight]: 'Gain Weight',
	};
	$: title = selected == 'Home' ? titles[$storage.option] : selected;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<nav>
    <img src="assets/home.svg" alt="Home" title="Home" on:click={click}>
    <img src="assets/gacha.png" alt="Gacha" title="Gacha" on:click={click}>
</nav>

<style lang="sass">
    @use '../vars' as *
    nav
        display: flex
        flex-direction: column
        align-items: center
        background: var(--theme)
    img
        width: 3em
</style>
