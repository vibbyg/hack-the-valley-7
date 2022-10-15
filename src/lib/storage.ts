export enum Option{
	LoseFat = 'lose',
	GainWeight = 'gain',
	None = 'none',
}

export interface Storage{
	/// lose fat or gain weight
	option: Option;
	/// unlocked recipies
	collected: string[];
}