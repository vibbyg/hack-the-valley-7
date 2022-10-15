<script lang="ts">
	import Gacha from './Gacha.svelte';
	import Collected from './Collected.svelte';
	import Recipe from './Recipe.svelte';
	import Navbar from './Navbar.svelte';
	import { storage } from './stores';
</script>

<main class="{$storage.option}">
    <section id="left">
        <Navbar/>
        <div id="recipes">
            {#each $storage.recipes as recipe}
                <Recipe {recipe}/>
            {/each}
        </div>
    </section>
    <section id="right">
        <Gacha/>
        <Collected/>
    </section>
</main>
<style lang="sass">
    main
        display: flex
        height: 100vh
    section
        height: 100%
        display: flex
        border: 1px solid var(--theme)
        flex-direction: column
    #right
        flex: 1
    #left
        flex: 3
    #recipes
        display: grid
        gap: 1em
        grid-template-columns: 1fr 1fr 1fr
</style>