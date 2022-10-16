import type { Recipe, Storage } from './storage';
import recipes from './recipes.json';

export const collection = recipes as { [name: string]: Recipe };

/// default settings
const done = Object.assign(
    {},
    ...Object.entries(collection).slice(0, 4).map(([name, recipe]) => ({ [name]: recipe })),
    ...Object.entries(collection).filter(_ => (Math.random() * 5 | 0) === 0).map(
        ([name, recipe]) => ({ [name]: recipe })
    )
);

export const init = {
    option: Option.None,
    collection: {},
    progress: Object.assign(
        {}, ...Object.entries(collection).filter(([k, _]) => !done[k]).map(
            ([name, { ingredients }]) => ({
                [name]: Object.keys(ingredients).filter(_ => 0 === (Math.random() * 7 | 0))
            })
        )
    ),
    currency: 420,
} as Storage;

function vegetables(keeping: any, sliced: any, arg2: boolean, water: any, to: any, prevent: any, browning: any, until: any, ready: any, to1: any, use: any, then: any, drain: any){
    throw new Error('Function not implemented.');
}
