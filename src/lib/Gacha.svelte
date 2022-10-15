<script lang="ts">
	import { fly } from 'svelte/transition';
	import { sineInOut as ease } from 'svelte/easing';

	const max = 100;
	let banners = Array.from(Array(max), (_, i) => `Banner ${i + 1}`);
	let selected = (max / 2 | 0) - 1;
	let x = 0;

	function change(num: number): void{
		x = 100 * num;
		selected = (selected + num + banners.length) % banners.length;
	}
</script>
<main class="{$$props.class}">
    <div id="middle">
        <div class="left material-icons-round" on:click="{() => change(-1)}"
             title="Previous Banner">
            navigate_before
        </div>
        <div id="banners">
            {#each banners as banner,i}
                {#if i === selected}
                    <span class="banner" transition:fly|local={{x,y:0,ease}}>
                        {banner}
                    </span>
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
</main>

<style lang="sass">
    @use 'sass:color'
    :global(body)
        height: 100vh
    main
        display: flex
        flex-direction: column
        width: 100%
        height: 100%
    .banner
        width: 10em
        height: 10em
        background: var(--theme)
        display: flex
        justify-content: center
        align-items: center
    #banners, #middle
        flex: 20
        display: flex
        justify-content: center
        align-items: center
    .left, .right
        position: absolute
        color: var(--theme)
        font-size: 8em
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
    .left
        left: 0
    .right
        right: 0
    #summon
        flex: 4
        display: flex
        justify-content: center
        align-items: center
        background: var(--theme)
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
        .left, .right
            bottom: 5%
        .left
            left: 0
        .right
            right: 0
</style>
