<script lang="ts">
	import { fly } from 'svelte/transition';
	import { sineInOut as ease } from 'svelte/easing';

	let banners = ['banana', 'nanab', 'ananas'];
	let selected = 0;
	let tr = {
		x: 0, y: 0, ease
	};

	function bannerChange(num: number): void{
		tr.x = 100 * num;
		selected = (selected + num + banners.length) % banners.length;
	}
</script>
<main class="{$$props.class}">
    <div id="middle">
        <div class="banner-nav material-icons-round"
             on:click="{() => bannerChange(-1)}">
            navigate_before
        </div>
        <div id="banners">
            {#each banners as b,i}
                {#if i === selected}
                    <span class="banner" transition:fly={tr}>{b}</span>
                {/if}
            {/each}
        </div>
        <div class="banner-nav material-icons-round"
             on:click="{() => bannerChange(1)}">
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

    .banner-nav
        color: var(--theme)
        flex: 1
        font-size: 8em
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer

    #summon
        flex: 5
        display: flex
        justify-content: center
        align-items: center
        background: var(--theme)
        & > div
            margin: 0 5em
            background-color: var(--theme)
            filter: brightness(200%)
            color: black
            padding: 30px
            border-radius: 10px
            cursor: pointer

</style>
