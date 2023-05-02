import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
};

const formatCountries = (res) => res.data.map(({
  cca3, name, capital, population,
}) => ({
  cca3,
  name,
  capital,
  population,
}));

export const getCountries = createAsyncThunk('get/countries', async () => {
  const res = await axios.get(url);
  return formatCountries(res);
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      const State = state;
      State.countries = action.payload;
    });
  },
});

export default countriesSlice.reducer;
