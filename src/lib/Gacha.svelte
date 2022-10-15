<script lang="ts">
	import Banner from './Banner.svelte';

	const banners = ['banana', 'nanab', 'ananas'];
	let focusedBanner = 0;

	function bannerChange(num: number): void{
		focusedBanner = (focusedBanner + num + banners.length) % banners.length;
	}
</script>
<main class="{$$props.class}">
    <div id="banners">
        <div class="banner-nav material-icons-round"
             on:click="{() => bannerChange(-1)}">
            navigate_before
        </div>
        <div id="banner-mid">
            <div class="banner">
                <Banner text="{banners[focusedBanner]}"/>
            </div>
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
    #banner-mid
        flex: 1
        display: flex
        justify-content: center
        align-items: center
    #banners
        flex: 20
        display: flex

    .banner-nav
        color: var(--theme)
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
