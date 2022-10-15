<div on:click="{summon}">{text}</div>

<style>
    div {
        background-color: gold;
        color: black;
        align-self: center;
        padding: 30px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>

<script lang="ts">
    export let text: string;
    export let banner: string;

    function summon(): void {
        alert(`Summoned ${banner}`);
    }
</script>
