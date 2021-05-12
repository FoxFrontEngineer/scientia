import { createSlice } from "@reduxjs/toolkit";
import { api } from "api/";

export const indicatorSlice = createSlice({
    name: "indicators",
    initialState: {
        indicators: [],
        loading: false,
        error: null,
    },
    reducers: {
        getIndicators: (state, action) => {
            state.indicators = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getIndicators } = indicatorSlice.actions;

export const fetchIndicators = () => async dispatch => {
    try {
        const response = await api.get('/users');
        if (response.status === 200) {
            dispatch(getIndicators(response.data))
        } else {
            console.info(response)
        }
    }
    catch (e) {
        return console.error(e.message);
    }
}

export default indicatorSlice.reducer;