import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// Lite kommentar inför rebase
export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
