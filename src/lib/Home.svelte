<script lang="ts">

	import { storage } from './stores';
	import Recipe from './Recipe.svelte';
</script>

<section>
    {#each $storage.recipes as recipe}
        <Recipe {recipe}/>
    {/each}
</section>

<style lang="sass">
    section
        padding: 1em
        display: grid
        gap: 1em
        grid-template-columns: repeat(auto-fill, minmax(20em, 1fr))
    @media (orientation: portrait)
        section
            grid-template-columns: 1fr
</style>
