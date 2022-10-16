<script lang="ts">
    import { collection } from './init';
    import type { Recipe } from './storage';
    import { storage } from './stores';

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
    section
        display: flex
        flex-direction: column
        align-items: center
    #name
        flex: 1
        font-weight: bold
        font-size: 2em

</style>
