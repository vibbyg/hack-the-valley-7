<script lang="ts">
	import Cube from './lib/Cube.svelte';
	import { key, storage } from './lib/stores';

	$: localStorage.setItem(key, JSON.stringify($storage));
</script>

<main>
    <Cube/>
</main>

<style lang="sass">
    main
        font-size: 3em
        display: flex
        justify-content: center
        align-items: center
        height: 100vh
</style>
