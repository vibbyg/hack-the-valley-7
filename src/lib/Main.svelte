<script lang="ts">
	import Gacha from './Gacha.svelte';
	import Home from './Home.svelte';
	import Navbar from './Navbar.svelte';
	import { storage } from './stores';

	let selected = 'Home';
	const pages = {
		Gacha, Home
	};
</script>
<Navbar bind:selected/>
<svelte:component this="{pages[selected]}" class="{$storage.option}"/>
