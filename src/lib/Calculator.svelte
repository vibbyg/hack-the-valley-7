<script lang="ts">
    import { Option } from './storage';
    import { storage } from './stores';
    import Background from './Background.svelte';

    const titles = {
        [Option.LoseFat]: 'Lose Fat',
        [Option.GainWeight]: 'Gain Weight',
    };

    const genders = [['Male', 1], ['Female', 0.8]];
    let gender = null;
    let weight = null;
    const units = [['kg', 2.2046], ['lbs', 1]];
    let unit = null;
    $: maintainence = weight && gender && unit ? weight * unit * 15 : 0;
    $: bonus = maintainence + {
        [Option.LoseFat]: -500,
        [Option.GainWeight]: 500,
    }[$storage.option];
    $: intake = maintainence ? ({
        Caloric: bonus * gender,
        Protein: weight * unit * 0.8 * gender,
        Carbohydrates: bonus / 2000 * 35 * gender,
        Fats: bonus / 2000 * 62 * gender,
        Fibre: bonus / 2000 * 32 * gender,
    }) : ({ Caloric: 0, Protein: 0, Carbohydrates: 0, Fats: 0, Fibre: 0 });
</script>

<Background prefix="calc_" ext="png"/>
<section>
    <style> body{
        height: 100vh
    }
    </style>
    <div id="goal">
        Your current fitness goal is to: <span class="nowrap">{titles[$storage.option]}</span>
    </div>
    <div class="wrap">
        Please enter your weight:
        <input type="number" placeholder="Weight:" bind:value={weight}>
        <span class="radio" class:unknown={unit === null}>
            {#each units as [u, i]}
                <label class:selected={unit === i}>
                    <input type="radio" bind:group={unit} value={i}>{u}
                </label>
            {/each}
        </span>
    </div>
    <div class="wrap">
        Please select your gender:
        <span id="gender" class="radio" class:unknown={gender === null}>
            {#each genders as [g, i] }
                <label class:selected={gender===i}>
                    <input type="radio" bind:group={gender} value={i}>{g}
                </label>
            {/each}
        </span>
    </div>
    <div class="wrap">
        Based on your data, your suggested daily intake of macro nutrients are
        as follows:
    </div>
    <div class="wrap" style="padding-top: 1em">
        <div id="result">
            {#each Object.entries(intake) as [k, v]}
                <div>
                    <div>{k}</div>
                    <div>{v.toFixed(2)} {k === 'Caloric' ? 'cal' : 'g'}</div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="sass">
    $pad: 5px
    input
        border-radius: 10px
    input[type="number"]
        color: unset
        background: unset
        width: 5em
    input[type="radio"]
        display: none
    $shadow: 4px
    section
        display: flex
        flex-direction: column
        color: white
        text-shadow: $shadow $shadow $shadow #000000
        padding: 1em
        font-size: 2em
        flex: 1
    label
        font-size: unset
        text-align: center
        padding: $pad
        transition: background-color 0.5s
        cursor: pointer
    label:hover
        transition: background-color 0.5s
        background-color: var(--theme-nav)
    .nowrap
        white-space: nowrap
    #goal, .wrap
        flex: 1
    :global(main.lose #result)
        background: #8984ef
    :global(main.gain #result)
        background: #fcc309
    #result
        display: flex
        font-size: 3rem
        gap: 1em
        border: 0.2em solid var(--theme)
        justify-content: center
        & > div
            flex: 1
            padding: 0 0.5em
    @mixin border()
        border: $pad solid var(--theme)
    .radio
        +border()
        border-radius: 10px
        white-space: nowrap
    div, span
        &:not(.unknown) > label
            &.selected
                background: var(--theme)
    @media(orientation: portrait)
        #result
            flex-direction: column
            font-size: 1.5em
        section
            font-size: 1.5rem
</style>
