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

export interface Nutrient {
    [name: string]: any,
    value: number,
    unit: string
}

export interface Recipe{
    calories: number,
    nutrients: {[name:string]: Nutrient},
    type: Type,
    src: string,
    ingredients: {[name:string]: Nutrient},
    steps: String[]
}

export interface Storage{
    /// lose fat or gain weight
    option: Option;
    /// available recipes
    collection: {[name:string]: Recipe};
    currency: number;
}