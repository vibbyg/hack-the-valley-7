<script lang="ts">
	import Gacha from './Gacha.svelte';
	import Home from './Home.svelte';
	import NavVert from './NavVert.svelte';
	import { key, storage } from './stores';
	import NavHori from './NavHori.svelte';

	let selected = 'Home';
	const pages = { Gacha, Home };

	$: localStorage.setItem(key, JSON.stringify($storage));
</script>
<main class="{$storage.option}">
    <div>
        <NavHori title="{selected}"/>
        <svelte:component this="{pages[selected]}" />
    </div>
    <NavVert bind:selected/>
</main>

<style lang="sass">
    main
        display: flex
    div
        flex: 1
        display: flex
        flex-direction: column
</style>
