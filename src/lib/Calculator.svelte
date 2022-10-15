<script lang="ts">
    import { Option } from './storage';
    import { storage } from './stores';

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
        Caloric: bonus,
        Protein: weight * unit * 0.8 * gender,
        Carbohydrates: bonus / 2000 * 35,
        Fats: bonus / 2000 * 62,
        Fibre: bonus / 2000 * 32,
    }) : ({ Caloric: 0, Protein: 0, Carbohydrates: 0, Fats: 0, Fibre: 0 });
</script>

<section>
    <style> body{
        height: 100vh
    }
    </style>
    <div id="goal">To {titles[$storage.option]}</div>
    <div class="wrap">
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
        <div id="gender" class="radio" class:unknown={gender === null}>
            {#each genders as [g, i] }
                <label class:selected={gender===i}>
                    <input type="radio" bind:group={gender} value={i}>{g}
                </label>
            {/each}
        </div>
    </div>
    <div class="wrap">
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
    input[type="number"]
        color: unset
        background: unset
        width: 5em
    input[type="radio"]
        display: none
    section
        display: flex
        flex-direction: column
        font-size: 2em
        align-items: center
        flex: 1
    label
        font-size: unset
        text-align: center
    #goal, .wrap
        flex: 1
    #result
        display: flex
        font-size: 2rem
        gap: 1em
    $border: 6px solid var(--theme)
    div, span
        &:not(.unknown) > label
            border: $border
            &.selected
                background: var(--theme)
    .unknown
        border: $border
</style>