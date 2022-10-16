<script lang="ts">
    import Gacha from './Gacha.svelte';
    import Collection from './Collection.svelte';
    import NavVert from './NavVert.svelte';
    import Calculator from './Calculator.svelte';
    import Information from './Information.svelte';
    import { storage } from './stores';
    import NavHori from './NavHori.svelte';
    import Quiz from './Quiz.svelte';

    let selected = 'Calculator';
    const pages = { Gacha, Calculator, Collection, Information, Quiz };

</script>
<main class="{$storage.option}">
    <div>
        <NavHori
                title="{selected === 'Calculator'?'Macros Calculator':selected}"/>
        <svelte:component this="{pages[selected]}"/>
    </div>
    <NavVert bind:selected/>
</main>

<style lang="sass">
    main
        display: flex
    div
        flex: 1
        display: flex
        flex-direction: column
</style>
