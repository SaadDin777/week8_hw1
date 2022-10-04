import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'classic drone',
        description: "Redefine what's possible",
        price: 14000.00,
        max_speed: '140 kph',
        traits: 'speed dribler',
        height: '6 feet',
        weight: 'Approx 795g'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseSpeed: (state, action) => { state.max_speed = action.payload},
        chooseTraits: (state, action) => { state.traits = action.payload},
        chooseHeight: (state, action) => { state.height = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseDescription, choosePrice, chooseSpeed, chooseTraits, chooseHeight, chooseWeight } = rootSlice.actions;