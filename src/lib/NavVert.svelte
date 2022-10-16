<script lang="ts">
    import { storage } from './stores';
    import { Option } from './storage';

    export let selected: string;

    function click({ target: { title } }: { target: HTMLElement }){
        console.debug('click on', title);
        selected = title;
    }

    const pages = [
        { src: 'assets/gacha.png', title: 'Gacha' },
        { src: 'assets/collection.png', title: 'Collection' },
        { src: 'assets/calc.svg', title: 'Calculator' },
        { src: 'assets/info.png', title: 'Information' },
        { src: `assets/quiz_${$storage.option}.svg`, title: 'Quiz' }
    ];
</script>

<svelte:head>
    <title>{selected}</title>
</svelte:head>

<nav>
    <span><img id="toggle" src="assets/expand.svg" alt=""/></span>
    {#each pages as { src, title }}
        <img {src} alt="{title}" {title} on:click={click}>
    {/each}
</nav>
<style lang="sass">
    @use '../vars' as *
    span
        height: $nav
        img
            height: 100%
    #toggle
        transform: rotate(180deg)
        transition: transform 500ms
    img:not(#toggle)
        cursor: pointer
    span, nav
        background: var(--theme-nav)
    img
        width: $nav
    nav
        height: $nav
        position: fixed
        right: 0
        display: flex
        flex-direction: column
        align-items: center
        transition: height 250ms
        z-index: 999
        img
            padding: 0.3em 0
        &:hover
            height: 100%
            img
                display: block
            #toggle
                transform: rotate(0)
        &:not(:hover)
            img:not(#toggle)
                display: none
</style>
