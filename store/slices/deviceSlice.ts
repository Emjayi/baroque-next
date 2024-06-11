// src/redux/slices/deviceSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type for the device slice
interface DeviceState {
    deviceType: string;
}

// Set the initial state for the device slice
const initialState: DeviceState = {
    deviceType: 'desktop',
};

// Create the device slice using createSlice from Redux Toolkit
const deviceSlice = createSlice({
    name: 'device', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Reducer for setting the device type
        setDeviceType: (state, action: PayloadAction<string>) => {
            state.deviceType = action.payload; // Update the deviceType in the state
        },
    },
});

// Export the action created by createSlice
export const { setDeviceType } = deviceSlice.actions;

// Export the reducer to be used in the store
export default deviceSlice.reducer;
