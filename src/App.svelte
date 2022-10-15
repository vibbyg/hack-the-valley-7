<script lang="ts">
	import Home from './lib/Main.svelte';
	import { storage } from './lib/stores';
	import { Option } from './lib/storage';

	$: gain = $storage.option === Option.GainWeight;
	$: lose = $storage.option === Option.LoseFat;

</script>

{#if $storage.option === Option.None}
    <main>
        <div id="gain" on:click={() => $storage.option = Option.GainWeight}>
            Gain Weight
        </div>
        <div id="lose" on:click={() => $storage.option = Option.LoseFat}>
            Lose Fat
        </div>
    </main>
{:else}
    <Home/>
{/if}

<style lang="sass">
    @use 'vars' as *
    main
        display: flex
        height: 100vh
        width: 100vw
        font-size: 5em
    div
        width: 50%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
    @media (orientation: portrait)
        main
            flex-direction: column
            font-size: 2em
        div
            width: 100%
            height: 50%
    #gain
        background: $gain
    #lose
        background: $lose

</style>
