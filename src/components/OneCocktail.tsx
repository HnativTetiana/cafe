import React from 'react';
import { Link } from 'react-router-dom';
import { Cocktail } from '../components/interfaces.ts';

const OneCocktail: React.FC<{ cocktail: Cocktail | null }> = ({ cocktail }) => {

    if (!cocktail) return null;

    const {
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strGlass,
    } = cocktail;

    return (
        <Link to={`/cocktail/${idDrink}`} className="cocktail-information">
            <img src={strDrinkThumb} alt={strDrink} />
            <h2>{strDrink}</h2>
            <div className='cocktail-details'>
                <h3>Details</h3>
                <p>
                    <span>Category:</span> {strCategory}
                </p>
                <p>
                    <span>Type:</span> {strAlcoholic}
                </p>
                <p>
                    <span>Glass:</span> {strGlass}
                </p>
            </div>
        </Link>
    );
}

export default OneCocktail;