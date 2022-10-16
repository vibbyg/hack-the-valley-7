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

export interface Recipe{
    name: string,
    calories: number,
    nutrients: Nutrient[],
    type: Type,
    src: string,
    ingredients: Nutrient[],
    steps: String[]
}

export interface Storage{
    /// lose fat or gain weight
    option: Option;
    /// available recipes
    collection: Recipe[];
    concurrency: number;
}