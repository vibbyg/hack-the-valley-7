<script lang="ts">
	import { storage } from './stores';
</script>

<ul>
    {#each $storage.collected as recipe}
        <li>{recipe}</li>
    {/each}
</ul>

<style lang="sass">
    ul
        border: 1px solid var(--theme)
        margin: 1em
        height: 100%
</style>