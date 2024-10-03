import React from 'react';
import { useDispatch } from 'react-redux';
import { Cocktail } from '../components/interfaces.ts';
import { cartAdd } from '../store/reducer';

const OrderButton: React.FC<{ cocktail: Cocktail | null }> = ({ cocktail }) => {

    const dispatch = useDispatch();

    if (!cocktail) return null;

    const handleOrder = () => dispatch(cartAdd(cocktail));

    return (
        <button className='order-button' onClick={handleOrder}>Order</button>
    );
}

export default OrderButton;