// weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherData: null,
        errorMessage: null,
        searching: false,
        loadingExtendedForecast: false,
    },
    reducers: {


        setWeatherData: (state, action) => {
            state.weatherData = action.payload;
            state.errorMessage = null;
        },
        setError: (state, action) => {
            state.errorMessage = action.payload;
            state.weatherData = null;
        },
        setSearchingLoading: (state, action) => {
            state.searching = action.payload;
        },

        setLoadingExtendedForecast: (state, action) => {
            state.loadingExtendedForecast = action.payload;
        },
    },
});

export const { setWeatherData, setError, setSearchingLoading, setLoadingExtendedForecast } = weatherSlice.actions;
export default weatherSlice.reducer;