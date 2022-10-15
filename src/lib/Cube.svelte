<script lang="ts">
	import { storage } from './stores';

	function cube(n: number): boolean{
		// i ∈ ℕ
		// (i-1)³ < n
		// b = 3i² - 3i
		// c = i³
		let [c, b, i] = [0, 0, 0];
		while(c < n){
			b += 6 * i;
			c += b + 1;
			i++;
		}
		return n == c;
	}

	let value = $storage.toString();
	$: finite = Number.isInteger(+value);
	$: if(finite){
		$storage = +value;
	}
	$: valid = value && finite;
</script>

<section>
    <input type="text" bind:value>
    <span>is
        {#if !valid || !cube(+value)} not{/if}
        {#if valid} a cube{:else} an integer{/if}
    </span>
</section>

<style lang="sass">
    @use '../vars' as *

    @media (orientation: portrait)
        section
            flex-direction: column
            font-size: 0.75em

    span
        white-space: nowrap
    section
        display: flex
        justify-content: center
        align-items: center
    input
        font-family: $mono
        width: 3em
        border: 1px solid $white
        padding: 0.2em
        margin-right: 0.2em
</style>