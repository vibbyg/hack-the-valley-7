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
    value: number,
    unit: string
}

export interface Recipe{
    calories: number,
    nutrients: { [name: string]: Nutrient },
    type: Type,
    src: string,
    ingredients: { [name: string]: Nutrient },
    steps: String[]
}

export interface Storage{
    /// lose fat or gain weight
    option: Option;
    /// fully unlocked recipes
    collection: { [name: string]: Recipe };
    /// partially unlocked recipes (name to ingredient array)
    progress: { [name: string]: string[] };
    currency: number;
}