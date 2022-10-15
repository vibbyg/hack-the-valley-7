<script lang="ts">
	import Gacha from './Gacha.svelte';
	import Home from './Home.svelte';
	import Navbar from './Navbar.svelte';
	import { key, storage } from './stores';

	let selected = 'Home';
	const pages = { Gacha, Home };

	$: localStorage.setItem(key, JSON.stringify($storage));
</script>
<Navbar bind:selected/>
<svelte:component this="{pages[selected]}" class="{$storage.option}"/>
