export enum Option{
    LoseFat = 'lose',
    GainWeight = 'gain',
    None = 'none',
}

export enum Type{
    Beverage = 'assets/beverage.png',
    Meal = 'assets/meal.png',
    Snack = 'assets/snack.png',
}

export interface Nutrient{
    name: string,
    value: number,
    unit: string,
}

export interface Nutrition{
    name: string,
    calories: number,
    nutrients: Nutrient[],
    type: Type,
    src: string,
}

export interface Storage{
    /// lose fat or gain weight
    option: Option;
    /// available recipes
    collection: Nutrition[];
    concurrency: number;
}