<script lang="ts">
    import { fly } from 'svelte/transition';
    import { sineInOut as ease } from 'svelte/easing';

    import { storage } from './stores';
    import Modal from './Modal.svelte';

    import bannerData from './banners.json';

    const bannerList = bannerData.fullList;
    const banners: any[] = bannerData[$storage.option];

    const tmpSummonData = ['banana', 'lemon', 'cereal'];

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

    function summon(){
        return tmpSummonData[Math.floor(Math.random() * tmpSummonData.length)];
    }
</script>
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
        <div on:click={() => isSummoning = true}>Summon</div>
        <div on:click={() => alert('Summon x10')}>Summon x10</div>
    </div>
</section>
{#if isSummoning}
    <div id="summon-screen">
        Summoned a {summon()}
        <button on:click={() => isSummoning = false}>OK</button>
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
        & > div
            white-space: nowrap
            margin: 0 5em
            background-color: var(--theme)
            filter: brightness(200%)
            color: black
            padding: 1em
            border-radius: 10px
            cursor: pointer
    #summon-screen
        z-index: 9999
        position: absolute
        width: 100vw
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        background: url('assets/background.gif')
        background-size: cover
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
        cursor: pointer
    .banner > img
        width: 100%
    .left, .right
        position: absolute
        color: var(--theme)
        font-size: 8em
        display: flex
        z-index: 99
        justify-content: center
        align-items: center
        cursor: pointer
    .left
        left: 10px
    .right
        right: 10px
    @media(orientation: portrait)
        #summon > div
            margin: 0 1em
        #middle
            position: relative
        .left, .right
            bottom: 0
</style>
