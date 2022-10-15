<script lang="ts">
    import { slide } from 'svelte/transition';

    export let selected: string;

    function click({ target: { title } }: { target: HTMLElement }){
        console.debug('click on', title);
        selected = title;
        hide = true;
    }

    // const titles = {
    //     [Option.LoseFat]: 'Lose Fat',
    //     [Option.GainWeight]: 'Gain Weight',
    // };
    // $: title = selected == 'Home' ? titles[$storage.option] : selected;
    let hide = true;
    const pages = [
        { src: 'assets/gacha.png', title: 'Gacha' },
        { src: 'assets/collection.png', title: 'Collection' },
        { src: 'assets/calc.svg', title: 'Calculator'}
    ];
</script>

<svelte:head>
    <title>{selected}</title>
</svelte:head>

<span>
<img id="toggle" class:hide src="assets/expand.svg" alt=""
     on:click={() => hide=!hide}>
</span>
{#if !hide}
    <nav transition:slide|local>
        {#each pages as { src, title }}
            <img {src} alt="{title}" {title} on:click={click}>
        {/each}
    </nav>
{/if}

<style lang="sass">
    @use '../vars' as *
    span
        position: fixed
        top: 0
        right: 0
        height: $nav
    #toggle
        &:not(.hide)
            transform: rotate(180deg)
        transition: transform 500ms

    span, nav
        background: var(--theme-nav)
    img
        width: $nav
    nav
        position: fixed
        top: $nav
        right: 0
        display: flex
        height: 100%
        flex-direction: column
        align-items: center
        img
            padding: 0.3em 0

</style>
