import { writable } from 'svelte/store';
import type { Storage } from './storage';
import { init } from './init';

export const key = 'fit';
/// read from localStorage or use init

// debug use
const option = JSON.parse(localStorage.getItem(key) || '{}').option;
const local = option ? { ...init, option } : init;

export function bg(prefix: string, { option }: Storage, ext: string): string{
    return
}

// prod use
// const local = ((s: Storage) => ({
//     ...s, ...JSON.parse(localStorage.getItem(key) || '{}')
// }))(init) as Storage;

export const storage = writable<Storage>(local);
