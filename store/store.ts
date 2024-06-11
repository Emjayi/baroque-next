// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import deviceReducer from './slices/deviceSlice'; // Import the device reducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        device: deviceReducer, // Add the device reducer to the store
    },
});

// Export types for the store's dispatch and state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Export the configured store
export default store;
