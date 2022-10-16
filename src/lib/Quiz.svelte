<script lang="ts">
    import { collection } from './init';
    import type { Recipe } from './storage';
    import { storage } from './stores';
    import Background from './Background.svelte';

    function random(){
        const keys = Object.keys($storage.progress);
        const r = Math.random();
        if(keys.length){
            return Object.entries($storage.progress)[r * keys.length | 0];
        }else{
            const nouveau = Object.entries(collection).filter(([k, _]) => !$storage.collection[k]);
            return nouveau[r * Object.keys(nouveau).length | 0];
        }
    }

    let [name, ingredients] = random();
    let ings: Set<string> = new Set(ingredients as string[]);
    let value = '';
    $: if(!ings.has(value) && collection[name].ingredients[value]){
        $storage.progress[name].push(value);
        $storage.currency += 1;
        // this recipe is completed
        if($storage.progress[name].length === Object.keys(collection[name].ingredients).length){
            $storage.currency += 2;
            $storage.collection[name] = collection[name];
            delete $storage.progress[name];
        }
        [name, ingredients] = random();
    }
</script>
<Background prefix="q_" ext="png"/>
<section>
    <div id="name">{name}</div>
    <ul>
        {#each $storage.progress[name] || [] as ing}
            <li>{ing}</li>
        {/each}
        <li><input type="text" bind:value></li>
    </ul>
</section>

<style lang="sass">
    @use 'sass:color'
    :global(main > div)
        height: 100vh
    section
        display: flex
        width: 60vw
        margin: 0 auto
        background: var(--help)
        border: 2em solid var(--theme)
        border-radius: 2em
        flex: 1
        flex-direction: column
        align-items: center
        justify-content: center
    #name
        font-weight: bold
        font-size: 2em

</style>
