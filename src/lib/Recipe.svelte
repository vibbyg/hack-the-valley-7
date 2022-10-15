<script lang="ts">
	import type { Recipe } from './storage';

	export let recipe: Recipe;
	const { name, ingredients, photo } = recipe;
</script>

<fieldset>
    <legend>{name}</legend>
    <ul>
        {#each ingredients as i}
            <li>{i}</li>
        {/each}
    </ul>
    <!-- todo use <img> -->
    <span class="material-icons-round">{photo}</span>
</fieldset>

<style lang="sass">
fieldset
    display: flex
    justify-content: center
    align-items: center
.material-icons-round
    font-size: 8em
</style>