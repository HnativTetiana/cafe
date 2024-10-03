import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import Cocktails from '../components/Cocktails.tsx';
import { Cocktail } from './interfaces.ts';
import NoAvailableCocktails from './NoAvailableCocktails.tsx';
import { cartRemoveAll } from '../store/reducer.ts';

interface CartInterface {
    isOpen: boolean;
    modalClose: () => void;
    cocktailsCart: Cocktail[] | null;
}

const Cart: React.FC<CartInterface> = ({ isOpen, modalClose, cocktailsCart }) => {
    const dispatch = useDispatch();
    const modalElement = document.getElementById("modal");

    const confirmHandler = () => {
        console.log(cocktailsCart);
        modalClose();
        dispatch(cartRemoveAll());
    }

    return modalElement && isOpen ? (
        createPortal(
            <div className='modal-container'>
                <div className='cart-modal'>
                    <button className='cart-close-butoon' onClick={modalClose}>X</button>
                    {
                        cocktailsCart && cocktailsCart?.length > 0 ?
                            <>
                                <Cocktails cocktails={cocktailsCart} isButton={true}></Cocktails>
                                <button className='confirm-order-button' onClick={confirmHandler}>Confirm</button>
                            </>
                            : <NoAvailableCocktails></NoAvailableCocktails>

                    }
                </div>
            </div>, modalElement
        )
    ) : null;
}

export default Cart;