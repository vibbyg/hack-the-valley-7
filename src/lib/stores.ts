import { writable } from 'svelte/store';
import type { Storage } from './storage';
import { init } from './init';

export const key = 'fit';
/// read from localStorage or use init
const local = ((s: Storage) => ({
	...s, ...JSON.parse(localStorage.getItem(key) || '{}')
}))(init) as Storage;

export const storage = writable<Storage>(local);
