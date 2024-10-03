import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchCocktails } from '../store/reducer.ts';
import { AppDispatch } from '../store/store.ts';
import { cocktailsSelector } from '../store/selectors.ts';
import Cocktails from '../components/Cocktails.tsx';

const CocktailsPage: React.FC = () => {

    const { parameter } = useParams<{ parameter: string }>();

    const link = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${parameter?.includes("name:") ? "s" : "f"}=${parameter?.split(":")[1]}`;

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails(link))
    }, [dispatch, link, parameter]);

    const cocktails = useSelector(cocktailsSelector);

    return <Cocktails cocktails={cocktails} isButton={false}></Cocktails>;
}

export default CocktailsPage;