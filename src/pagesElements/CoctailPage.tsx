import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCocktails } from '../store/reducer.ts';
import { AppDispatch } from '../store/store.ts';
import { cocktailsSelector } from '../store/selectors.ts';
import OneCocktail from '../components/OneCocktail.tsx';
import OrderButton from '../components/OrderButton.tsx';
import NoAvailableCocktails from '../components/NoAvailableCocktails.tsx';

const CocktailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`))
    }, [dispatch, id]);

    const cocktails = useSelector(cocktailsSelector);

    const cocktail = cocktails && cocktails.length > 0 ? cocktails[0] : null;

    if (!cocktail) return <NoAvailableCocktails></NoAvailableCocktails>;

    const {
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
    } = cocktail;

    const ingredients = [
        { ingredient: strIngredient1, measure: strMeasure1 },
        { ingredient: strIngredient2, measure: strMeasure2 },
        { ingredient: strIngredient3, measure: strMeasure3 },
        { ingredient: strIngredient4, measure: strMeasure4 },
        { ingredient: strIngredient5, measure: strMeasure5 },
        { ingredient: strIngredient6, measure: strMeasure6 },
    ].filter(item => item.ingredient);

    return (
        <div className="cocktail-page">
            <div className='cocktail-ingredients-container'>
                <OneCocktail cocktail={cocktail}></OneCocktail>
                <div className='cocktail-ingredients'>
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((item, index) => (
                            <li key={index}>
                                {item.measure} {item.ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='cocktail-instructions'>
                <h3>Instructions</h3>
                <p>{strInstructions}</p>
            </div>

            <OrderButton cocktail={cocktail}></OrderButton>
        </div>
    );
}

export default CocktailPage;