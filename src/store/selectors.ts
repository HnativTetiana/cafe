import { RootState } from "./store";

export const cocktailsSelector = (state: RootState) => state.cocktails;

export const cartSelector = (state: RootState) => state.cart;

export const errorSelector = (state: RootState) => state.error;