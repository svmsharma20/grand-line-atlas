import { configureStore } from "@reduxjs/toolkit";
import redcers from "./reducers";

const store = configureStore({ reducer: redcers });

export default store;
