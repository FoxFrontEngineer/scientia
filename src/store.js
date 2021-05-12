import { configureStore } from "@reduxjs/toolkit";
import indicators from "./store/indicators/";

export default configureStore({
  reducer: {
    indicators: indicators,
  },
});