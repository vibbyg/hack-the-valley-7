<script lang="ts">
    import Main from './lib/Main.svelte';
    import { key, storage } from './lib/stores';
    import { Option } from './lib/storage';
    import { cubicInOut } from 'svelte/easing';

    $: gain = $storage.option === Option.GainWeight;
    $: lose = $storage.option === Option.LoseFat;
    $: opt = $storage.option;

    $: localStorage.setItem(key, JSON.stringify($storage));
    const [g, l] = [Option.GainWeight, Option.LoseFat].map(o => () => ({
        duration: 500,
        css: t => `flex: ${
            opt === o ? (2 - cubicInOut(t)) * 50 : cubicInOut(t) * 50
        // opt === o ? 60 + (1 - cubicInOut(t)) * 40 : cubicInOut(t) * 40
        }%`
    }));
</script>

{#if opt === Option.None}
    <main>
        <div id="gain" out:g on:click={() => $storage.option = Option.GainWeight}>
            Gain Weight
        </div>
        <div id="lose" out:l on:click={() => $storage.option = Option.LoseFat}>
            Lose Fat
        </div>
    </main>
{:else}
    <Main/>
{/if}

<style lang="sass">
    @use 'vars' as *
    main
        display: flex
        height: 100vh
        width: 100vw
        font-size: 5em
        overflow: hidden
    div
        flex: 1
        height: 100%
        overflow: hidden
        white-space: nowrap
        display: flex
        justify-content: center
        align-items: center
    #gain
        background: $gain
    #lose
        background: $lose
    @media (orientation: portrait)
        main
            flex-direction: column
            font-size: 2em
    @media (orientation: landscape)
        #gain, #lose
            &:hover
                flex: 1.5
            transition: flex 100ms
</style>
