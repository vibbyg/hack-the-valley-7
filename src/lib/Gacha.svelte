<div id="gacha">
    <div id="top">
        <div id="spacer-left"></div>
        <div id="currency">
            <div>{currency}</div>
        </div>
        <div id="title">
            <h1>{title}</h1>
        </div>
        <div id="spacer-right"></div>
    </div>
    <div id="banners">
        <div class="banner-nav" on:click="{() => bannerChange(-1)}">←</div>
        <div id="banner-mid">
            <div class="banner">
                <Banner text="{banners[focusedBanner]}" />
            </div>
        </div>
        <div class="banner-nav" on:click="{() => bannerChange(1)}">→</div>
    </div>
    <div id="bottom">
        <div class="spacer"></div>
        <div class="button">
            <Summon text="Summon" banner="{banners[focusedBanner]}" />
        </div>
        <div class="spacer"></div>
        <div class="button">
            <Summon text="Summon x420" banner="{banners[focusedBanner]}" />
        </div>
        <div class="spacer"></div>
    </div>
</div>

<style>
    #gacha {
        background-color: white;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
    }

    #top {
        background-color: red;
        flex: 15%;
        display: flex;
        /* text-align: center; */
    }

    #top > div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    #spacer-left {
        flex: 1;
    }

    #currency {
        flex: 1;
    }

    #currency > div {
        background-color: blue;
        align-self: center;
        padding: 20px;
        border-radius: 30%;
    }

    #title {
        flex: 2;
    }

    #spacer-right {
        flex: 2;
    }

    #banners {
        flex: 60%;
        display: flex;
    }

    .banner-nav {
        background-color: magenta;
        color: black;
        font-weight: bold;
        font-size: 48pt;
        width: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
    }

    #banner-mid {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        /* position: relative; */
    }

    .banner {
        /* position: absolute;
        top: 0;
        left: 0; */
        z-index: -1;
    }

    #bottom {
        background-color: red;
        flex: 25%;
        display: flex;
    }

    .spacer {
        flex: 1;
    }

    .button {
        flex: 1;
        display: flex;
        justify-content: center;
    }
</style>

<script lang="ts">
    import Banner from './Banner.svelte';
    import Summon from './Summon.svelte';

    let currency = 420;
    let title = 'Gacha';

    const banners = ["banana", "nanab", "ananas"];
    let focusedBanner = 0;

    function bannerChange(num: number): void {
        focusedBanner = (focusedBanner + num + banners.length) % banners.length;
    }
</script>
