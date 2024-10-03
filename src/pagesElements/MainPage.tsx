import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCocktails } from '../store/reducer.ts';
import { AppDispatch } from '../store/store.ts';
import RandomCocktail from '../components/RandomCocktail.tsx';

const MainPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails('https://www.thecocktaildb.com/api/json/v1/1/random.php'))
    }, [dispatch]);

    return (
        <div className='main-page'>
            <h1>To choose a cocktail, use the search or filter</h1>
            <RandomCocktail></RandomCocktail>
        </div>
    );
}

export default MainPage;