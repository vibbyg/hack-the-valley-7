<script lang="ts">
    export let title: string;
    export let isOpen = true;
</script>

<div id="blocker">
    <div id="box">
        <div id="title">{title}</div>
        <div id="body">
            <slot></slot>
        </div>
        <div id="close" class="material-icons-round"
             on:click="{() => isOpen = false}">
            close
        </div>
    </div>
</div>

<style>
    @import "https://fonts.googleapis.com/icon?family=Material+Icons+Round";

    #blocker {
        background-color: #0000007f;
        z-index: 9999;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #box{
        background-color: white;
        border-radius: 10px;
        position: absolute;
        width: 20em;
    }

    #title{
        text-align: center;
        font-weight: bold;
        font-size: 24pt;
        padding: 0.5em;
    }

    #body{
        padding: 0.5em;
    }

    #close{
        font-size: 1.2em;
        user-select: none;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.2em;
        cursor: pointer;
    }
</style>
