<script lang="ts">
	import { storage } from './stores';
</script>

<section>
    {#each $storage.recipes as { ingredients }}
        <div>
            <ul>
                {#each ingredients as i}
                    <li>{i}</li>
                {/each}
            </ul>
        </div>
    {/each}
</section>

<style lang="sass">
    $dur: 200ms
    $width: 18em
    section
        padding: 1em
        display: grid
        gap: 1em
        grid-template-columns: repeat(auto-fill, minmax(18em, 1fr))
    @media (orientation: portrait)
        section
            grid-template-columns: 1fr
    div
        background: var(--card) no-repeat
        display: flex
        justify-content: center
        &:hover
            color: var(--theme)
            border-color: var(--theme)
        transition: color $dur, border-color $dur
        width: $width
        height: $width / 3 * 4
</style>
