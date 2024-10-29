import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        value : 'Erevan'
    },
    reducers: {
        changeCity: (state, action) => {
            state.value = action.payload
        }
    },
});

export default citySlice.reducer;
export const { changeCity } = citySlice.actions;
