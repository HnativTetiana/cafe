import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CocktailsPage from './CocktailsPage';
import CocktailPage from './CoctailPage';

const Content: React.FC = () => {
    return (
            <main>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>} />
                    <Route path="/cocktails/:parameter" element={<CocktailsPage></CocktailsPage>} />
                    <Route path="/cocktail/:id" element={<CocktailPage></CocktailPage>} />
                </Routes>
            </main>
    );
}

export default Content;