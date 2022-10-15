import type { Nutrition, Storage } from './storage';
import { Option, Type } from './storage';

const recipes = Array.from(Array(10), (_, i) => i + 1).map(i => ({
    name: `Dish ${i}`,
    calories: Math.random() * 300 | 0,
    type: Object.values(Type)[Math.random() * 3 | 0],
    nutrients: 'abcde'.split('').map(c => ({
        name: c.repeat(5),
        value: Math.random() * 50 | 0,
        unit: ['g', 'mg', 'kg'][Math.random() * 3 | 0]
    }))
})) as Nutrition[];
/// default settings
export const init = {
    option: Option.None,
    collection: recipes,
    concurrency: 420,
} as Storage;