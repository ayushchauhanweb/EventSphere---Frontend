import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: JSON.parse(localStorage.getItem("eventSphere_favorites")) || [],
  },
  reducers: {
    toggleFavorites(state, actions) {
      const event = actions.payload;
      const existingEvent = state.items.find(
        (e) => (e.id || e._id) === (event.id || event._id),
      );
      if (existingEvent) {
        state.items = state.items.filter(
          (e) => (e.id || e._id) !== (event.id || event._id),
        );
      } else {
        state.items.push(event);
      }
      localStorage.setItem(
        "eventSphere_favorites",
        JSON.stringify(state.items),
      );
    },

    removeFavorites(state) {},
    clearFavorites(state) {
      state.items = [];
      localStorage.clear("eventSphere_favorites");
    },
  },
});

export const { toggleFavorites, removeFavorites, clearFavorites } =
  favoriteSlice.actions; // update the state

export default favoriteSlice.reducer; // connect with store
