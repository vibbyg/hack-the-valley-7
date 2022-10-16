<script lang="ts">
    import { fly } from 'svelte/transition';
    import { sineInOut as ease } from 'svelte/easing';
    import { collection } from './init';

    import { storage } from './stores';
    import Modal from './Modal.svelte';
    import Card from './Card.svelte';

    import bannerData from './banners.json';
    import Background from './Background.svelte';

    const bannerList = bannerData.fullList;
    const banners: any[] = bannerData[$storage.option];

    const foodNames = Object.keys(collection);

    let selected = 0;
    let x = 0;

    let isInfoOpen = false;
    let isSummoning = false;

    function change(num: number): void{
        x = 400 * num;
        selected = (selected + num + banners.length) % banners.length;
    }

    function flyIn(node){
        return fly(node, { x, y: 50, easing: ease });
    }

    function flyOut(node){
        return fly(node, { x: -x, y: 50, easing: ease });
    }

    function keypress(e: KeyboardEvent): void{
        if(e.code === 'ArrowLeft')
            change(-1);
        else if(e.code === 'ArrowRight')
            change(1);
    }

    let pickedFood: string;

    function summon(n: number){
        $storage.currency -= 10 * n;
        pickedFood =  foodNames[Math.floor(Math.random() * foodNames.length)];
        $storage.collection[pickedFood] = collection[pickedFood];

        isSummoning = true;
    }

    const style = 'background: url(\'assets/background.gif\'); background-size: cover;';
</script>
<Background prefix="gacha_" ext="png"/>
<section class="{$$props.class}">
    <style> body{
        height: 100vh
    }
    </style>
    <div id="middle" tabindex="0" on:keydown="{keypress}">
        <div class="left material-icons-round" on:click="{() => change(-1)}"
             title="Previous Banner">
            navigate_before
        </div>
        <div id="banners">
            {#each banners as banner, i}
                {#if i === selected}
                    <div class="banner" in:flyIn|local out:flyOut|local
                         on:click="{() => isInfoOpen = true}">
                        <img class="glow" src="{`assets/gacha_glow_${$storage.option}.gif`}" alt="">
                        <img src="assets/banners/{bannerList[banner].img}"
                             alt="{bannerList[banner].name}"/>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="right material-icons-round" on:click="{() => change(1)}"
             title="Next Banner">
            navigate_next
        </div>
        {#if isInfoOpen}
            <Modal title="{bannerList[banners[selected]].name}"
                   bind:isOpen="{isInfoOpen}">
                {bannerList[banners[selected]].descript}
            </Modal>
        {/if}
    </div>
    <div id="summon">
        <div on:click={() => summon(1)}><span>Summon</span></div>
        <!-- <div on:click={() => summon(10)}><span>Summon x10</span></div> -->
    </div>
</section>
{#if isSummoning}
    <div id="summon-screen" {style} on:click="{() => isSummoning = false}">
        <h1>Congratulations!</h1>
        <div id="card-area">
            <Card name="{pickedFood}" recipe="{collection[pickedFood]}" />
        </div>
        <div id="spacer"></div>
    </div>
{/if}

<style lang="sass">
    @use 'sass:color'
    :global(main)
        height: 100%
    #middle
        flex: 20
        display: flex
        justify-content: center
        align-items: center
        position: relative
        &:focus
            outline: none
    #summon
        display: flex
        justify-content: center
        align-items: center
        background: var(--theme)
        padding: 1em
        flex-basis: 1em
        //flex-grow: 1
        & > div
            flex: 1
            display: flex
            justify-content: center
        & > div > span
            padding: 1em
            border-radius: 10px
            white-space: nowrap
            color: black
            cursor: pointer
            background-color: var(--theme)
            filter: brightness(150%)

    #summon-screen
        z-index: 9999
        position: absolute
        width: 100vw
        height: 100vh
        display: flex
        font-size: 2em
        color: white
        flex-direction: column
        justify-content: center
        align-items: center
        overflow: hidden
        cursor: pointer
    #spacer
        flex: 1
    @keyframes summon
        from
            transform: scale(10)
        to
            transform: scale(1.1)
    #card-area
        transform: scale(1.1)
        animation: 1s linear 0s summon
    section
        display: flex
        flex: 1
        flex-direction: column
    $size: 50vh
    .banner
        color: white
        width: $size
        height: $size
        background: var(--theme)
        display: flex
        justify-content: center
        align-items: center
        position: absolute
        left: calc(50% - $size / 2)
        top: calc(50% - $size / 2)
        cursor: pointer
    .banner > img
        position: absolute
        width: 100%
        &.glow
            width: 110%
    .left, .right
        position: absolute
        color: var(--theme)
        filter: brightness(150%)
        font-size: 8em
        display: flex
        z-index: 1
        justify-content: center
        align-items: center
        cursor: pointer
    .left
        left: 10px
    .right
        right: 10px
    @media(orientation: portrait)
        #middle
            position: relative
        .left, .right
            bottom: 0
</style>
