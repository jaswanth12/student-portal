import { configureStore } from '@reduxjs/toolkit';
import userslice from './user.js';

const store = configureStore({
	reducer : {user : userslice.reducer},
});

export default store;

