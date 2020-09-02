import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoriler",
  initialState: {
    list: typeof window !== 'undefined' && localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
  },
  reducers: {
    add: (state, action) => {
      if(state.list.every(item => item.imdbID !== action.payload.imdbID)) {
        state.list.push(action.payload)
        localStorage.setItem('list', JSON.stringify(state.list))
      }
    },
    remove: (state, action) => {
      const newList = state.list.filter(item => item.imdbID !== action.payload.imdbID)
      state.list = newList
      localStorage.setItem('list', JSON.stringify(newList))
    },
    reset: (state) => {
      state.list.length = 0
      localStorage.setItem('list', JSON.stringify([]))
    }
  },
});


/**
 * @param   {Object} 
 * @returns {number} 
 */
export const getFavorite = (state) => state.favoriler.list;
export const {
    add, remove, reset,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
