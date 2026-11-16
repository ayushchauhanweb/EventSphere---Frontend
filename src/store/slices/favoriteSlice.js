import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        name: "Hii",
    },
    reducers: {
        toggleFavorites(state, actions) {
            state.name = actions.payload;
        },
        removeFavorites(state) { },
        clearFavorites(state) { },
    },
});

export const { toggleFavorites, removeFavorites, clearFavorites } =
    favoriteSlice.actions; // update the state

export default favoriteSlice.reducer; // connect with store
