export interface Cocktail {
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
}

export interface State {
    cocktails: Cocktail[],
    cart: Cocktail[],
    error: null | string,
}