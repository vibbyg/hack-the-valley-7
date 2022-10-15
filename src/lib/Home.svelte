<script lang="ts">
	import Gacha from './Gacha.svelte';
	import { storage } from './stores';
	import Collected from './Collected.svelte';
</script>

<main class="{$storage.option}">
    <div id="left">left</div>
    <div id="right">
        <Gacha/>
        <Collected/>
    </div>
</main>
<style lang="sass">
    main
        display: flex
        height: 100vh
    div
        height: 100%
        display: flex
        border: 1px solid var(--theme)
        flex-direction: column
        &#right
            flex: 1
        &#left
            flex: 3
</style>