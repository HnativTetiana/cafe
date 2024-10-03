import React from 'react';
import { useSelector } from 'react-redux';
import { cocktailsSelector } from '../store/selectors.ts';
import OneCocktail from "./OneCocktail.tsx";
import OrderButton from './OrderButton.tsx';

const RandomCocktail: React.FC = () => {

    const cocktails = useSelector(cocktailsSelector);
    const cocktail = cocktails && cocktails.length > 0 ? cocktails[0] : null;

    return cocktail ? (
        <div className='random-cocktail'>
            <div className="recommendation-label">
                <span>Personal recommendation</span>
            </div>
            <OneCocktail cocktail={cocktail}></OneCocktail>
            <OrderButton cocktail={cocktail}></OrderButton>
        </div>
    ) : <></>;
}

export default RandomCocktail;