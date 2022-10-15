<script lang="ts">
	import Cube from './lib/Cube.svelte';
	import { key, storage } from './lib/stores';

</script>

<main>
    <div id="gain">Gain Weight</div>
    <div id="lose">Lose Fat</div>
</main>

<style lang="sass">
    @use './vars' as *
    main
        display: flex
        font-size: 5em
    main > div
        width: 50vw
        height: 100vh
        display: flex
        justify-content: center
        align-items: center
    #gain
        background: $orange
    #lose
        background: $teal

</style>
