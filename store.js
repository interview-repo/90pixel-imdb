import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./redux/favoriSlice";


export default configureStore({
  reducer: {
    favoriler: favoriteReducer
  },
  devTools: true,
});