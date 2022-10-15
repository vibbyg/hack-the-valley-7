import { writable } from 'svelte/store';

export const key = 'cube';
const local = ((n: number) => JSON.parse(localStorage.getItem(key) || 'null') ?? n)(0);
export const storage = writable<number>(local);
