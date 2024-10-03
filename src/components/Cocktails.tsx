import React from 'react';
import { useDispatch } from 'react-redux';
import { cartRemove } from '../store/reducer.ts';
import OneCocktail from '../components/OneCocktail.tsx';
import { Cocktail } from '../components/interfaces.ts';
import NoAvailableCocktails from '../components/NoAvailableCocktails.tsx';

const Cocktails: React.FC<{ cocktails: Cocktail[] | null, isButton: boolean }> = ({ cocktails, isButton }) => {
    const dispatch = useDispatch();

    return cocktails ? (
        <>
            <ul className='cocktails-list'>
                {
                    cocktails?.map((item) => (
                        <li key={item.idDrink}>
                            {
                                isButton && <button className='cocktail-delete-button' onClick={() => dispatch(cartRemove(item.idDrink))}>x</button>
                            }
                            <OneCocktail cocktail={item}></OneCocktail>
                        </li>
                    ))
                }

            </ul>
        </>
    ) : <NoAvailableCocktails></NoAvailableCocktails>;
}

export default Cocktails;