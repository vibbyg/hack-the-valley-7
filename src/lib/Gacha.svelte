<script lang="ts">
    import { fly } from 'svelte/transition';
    import { sineInOut as ease } from 'svelte/easing';

    import Modal from './Modal.svelte';

    const max = 100;
    let tmp: string[] = [];
    for (let i = 1; i <= max; i++) {
        tmp.push(`${"banana".split("").map(v => ({v, s: Math.random()}))
            .sort((a, b) => a.s - b.s).map(({v}) => v).join("")}`);
    }
    const banners = [...new Set(tmp)].map((x, i) => `${i + 1}. ${x}`);
    let selected = 0;
    let x = 0;

    let infoOpen = false;

    function change(num: number): void{
        x = 400 * num;
        selected = (selected + num + banners.length) % banners.length;
    }

    function flyIn(node) {
        return fly(node, {x, y: 50, easing: ease});
    }

    function flyOut(node) {
        return fly(node, {x: -x, y: 50, easing: ease});
    }

    function keypress(e: KeyboardEvent): void {
        if (e.code === "ArrowLeft")
            change(-1);
        else if (e.code === "ArrowRight")
            change(1);
    }

    function showInfo() {
        infoOpen = true;
    }
</script>
<section class="{$$props.class}">
    <style>
        body{
            height: 100vh
        }
    </style>
    <div id="middle" tabindex="0" on:keydown="{keypress}">
        <div class="left material-icons-round" on:click="{() => change(-1)}"
             title="Previous Banner">
            navigate_before
        </div>
        <div id="banners">
            {#each banners as banner,i}
                {#if i === selected}
                    <div class="banner" in:flyIn|local out:flyOut|local
                        on:click="{showInfo}"
                    >
                        {banner}
                    </div>
                {/if}
            {/each}
        </div>
        <div class="right material-icons-round" on:click="{() => change(1)}"
             title="Next Banner">
            navigate_next
        </div>
    </div>
    <div id="summon">
        <div on:click={() => alert('Summon')}>Summon</div>
        <div on:click={() => alert('Summon x10')}>Summon x10</div>
    </div>
</section>
<Modal title="{banners[selected]}" bind:isOpen="{infoOpen}">
    banana
</Modal>

<style lang="sass">
    @use 'sass:color'
    :global(main)
        height: 100%
    section
        display: flex
        flex: 1
        flex-direction: column
    .banner
        color: white
        width: 20em
        height: 20em
        background: var(--theme)
        display: flex
        justify-content: center
        align-items: center
        position: absolute
        left: calc(50% - 10em)
        top: calc(50% - 10em)
        background-image: url("assets/dummy.png")
        cursor: pointer
    #middle
        flex: 20
        display: flex
        justify-content: center
        align-items: center
        position: relative
    #middle:focus
        outline: none
    .left, .right
        position: absolute
        color: var(--theme)
        font-size: 8em
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
    .left
        left: 10px
    .right
        right: 10px
    #summon
        display: flex
        justify-content: center
        align-items: center
        background: var(--theme)
        padding: 1em
        & > div
            white-space: nowrap
            margin: 0 5em
            background-color: var(--theme)
            filter: brightness(200%)
            color: black
            padding: 1em
            border-radius: 10px
            cursor: pointer
    @media(orientation: portrait)
        #summon > div
            margin: 0 1em
        #middle
            position: relative
        .left, .right
            bottom: 0
</style>
