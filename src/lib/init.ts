import type { Recipe, Storage } from './storage';
import { Option } from './storage';

const recipes = 'abcdefghijk'.split('').map(c => ({
	name: c.repeat(5),
	ingredients: Array.from(Array(5), _ => c.repeat(6)),
	photo: 'local_drink'
})) as Recipe[];
/// default settings
export const init = {
	option: Option.None,
	collected: ['Bubble Tea'],
	recipes,
	concurrency: 420,
} as Storage;