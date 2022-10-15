<script lang="ts">

	import { storage } from './stores';
	import Recipe from './Recipe.svelte';
	import Collected from './Collected.svelte';
</script>

<main class="{$$props.class}">
    <section id="left">
        {#each $storage.recipes as recipe}
            <Recipe {recipe}/>
        {/each}
    </section>
    <section id="right">
        <Collected/>
    </section>
</main>

<style lang="sass">
    main
        display: flex
    #right
        flex: 1
    #left
        flex: 3
        display: grid
        gap: 1em
        grid-template-columns: 1fr 1fr 1fr
    @media (orientation: portrait)
        #left
            grid-template-columns: 1fr
        #right
            display: none
</style>
