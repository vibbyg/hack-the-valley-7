import { writable } from 'svelte/store';
import type { Storage } from './storage';
import { Option } from './storage';

export const key = 'fit';
/// default storage
const init = {
	option: Option.None,
	collected: ['Bubble Tea']
} as Storage;
/// read from localStorage or use init
const local = ((s: Storage) => ({
	...s, ...JSON.parse(localStorage.getItem(key) || '{}')
}))(init) as Storage;

export const storage = writable<Storage>(local);
