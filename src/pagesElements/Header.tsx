import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cocktailImage from '../imgs/cocktail.png';
import { cartSelector } from '../store/selectors';
import Cart from '../components/Cart';

const Header: React.FC = () => {
    const [name, setName] = useState("");
    const [isOpen, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value.replace(/\s+/g, " "));

    const handleBlur = () => setName((prev) => prev.trim());

    const navigate = useNavigate();

    const cartHandler = () => {
        navigate(`/cocktails/name:${name}`);
        setName("")
    }

    const cocktailsCart = useSelector(cartSelector);

    const cartHabdler = () => cocktailsCart.length > 0 ? setOpen(true) : alert("First, choose a cocktail");

    const modalClose = () => setOpen(false);

    return (
        <header>
            <Link to="/" className='logo-link'>
                <img src={cocktailImage} alt="Cocktail icon" className='cocktail-icon' /> Sip & Savor
            </Link>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder='Enter the name of the cocktail'
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <button onClick={cartHandler}>Search</button>
            </div>
            <div className='cart-container'>
                <i className='fas fa-shopping-cart' onClick={cartHabdler}></i>
                <div className='bubble-icon'>
                    <span>{cocktailsCart.length}</span>
                </div>
            </div>
            <Cart
                isOpen={isOpen}
                modalClose={modalClose}
                cocktailsCart={cocktailsCart}
            ></Cart>
        </header >
    );
}

export default Header;
