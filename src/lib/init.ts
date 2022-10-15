import type { Recipe, Storage } from './storage';
import { Option } from './storage';

const foods = [
	'lunch_dining', 'local_bar', 'local_pizza',
	'ramen_dining', 'bakery_dining', 'dinner_dining',
	'icecream', 'coffee', 'wine_bar', 'water_drop',
];

const recipes = Array.from(Array(10), (_, i) => i + 1).map(i => ({
	name: `Dish ${i}`,
	ingredients: Array.from(Array(1 + (Math.random() * 4) | 0), (_, i) => i).map(
		i => `Ingredient ${i}`
	),
	// photo: foods[Math.random() * foods.length | 0],
	photo: foods[i - 1]
})) as Recipe[];
/// default settings
export const init = {
	option: Option.None,
	recipes,
	concurrency: 420,
} as Storage;