import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Cocktail, State } from "../components/interfaces";

const updateCartState = (state: State) => {
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
};

export const initialState: State = {
    cocktails: [],
    cart: JSON.parse(sessionStorage.getItem('cart') || '[]'),
    error: null,
}

export const fetchCocktails = createAsyncThunk<{ drinks: Cocktail[] }, string>('cocktails/fetchData', async (link: string) => {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Failed with status code: ' + response.status);
        }
        const cocktails: Cocktail[] = await response.json();
        return cocktails;
    } catch (error: any) {
        return error.message;
    }
});

const storeSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        cartAdd: (state, action: PayloadAction<Cocktail>) => {
            const isAlreadyInCart = state.cart.some(item => item.idDrink === action.payload.idDrink);
            if (!isAlreadyInCart) {
                state.cart.push(action.payload);
                updateCartState(state);
            }
        },
        cartRemove: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item.idDrink !== action.payload);
            updateCartState(state);
        },
        cartRemoveAll: (state) => {
            state.cart = [];
            updateCartState(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.fulfilled, (state, action: PayloadAction<{ drinks: Cocktail[] }>) => {
                state.cocktails = action.payload.drinks;
                state.error = null;
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.cocktails = [];
                state.error = action.error.message || null;
            })
    }
});

export const { cartAdd, cartRemove, cartRemoveAll } = storeSlice.actions;

export default storeSlice.reducer;