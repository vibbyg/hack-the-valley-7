<script lang="ts">
    import { storage } from './stores';

    export let prefix: string;
    export let ext: string;
    const style = [
        `background: url('assets/${prefix}${$storage.option}.${ext}');`,
        `background-size: cover;`
    ].join('');
</script>
<div {style}></div>

<style lang="sass">
    div
        position: fixed
        width: 100vw
        height: 100vh
        top: 0
        left: 0
        z-index: -65535
</style>