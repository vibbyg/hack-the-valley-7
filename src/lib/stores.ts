import { writable } from 'svelte/store';
import type { Storage } from './storage';
import { init } from './init';

export const key = 'fit';
/// read from localStorage or use init
// this will be uncommented later, now we want to test init data
// const local = ((s: Storage) => ({
// 	...s, ...JSON.parse(localStorage.getItem(key) || '{}')
// }))(init) as Storage;
const local = init;

export const storage = writable<Storage>(local);
