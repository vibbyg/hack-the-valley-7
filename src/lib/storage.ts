export enum Option{
	LoseFat = 'lose',
	GainWeight = 'gain',
	None = 'none',
}

export interface Recipe{
	name: string,
	ingredients: string[],
	/// url to photo (or relative path to public assets)
	photo: string,
}

export interface Storage{
	/// lose fat or gain weight
	option: Option;
	/// available recipes
	recipes: Recipe[];
	concurrency: number;
}