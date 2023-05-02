import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BackendUrl = 'https://restcountries.com/v3.1';

const initialState = {
  countries: [],
  country: [],
};

const formatCountries = (res) => res.data.map(({
  cca3, name, capital, population, flags, official, unMember, currencies,
  independent, region, languages,
}) => ({
  cca3,
  name,
  capital: Array.isArray(capital) ? capital[0] || '' : capital || '',
  population,
  flags,
  official,
  unMember,
  currencies,
  independent,
  region,
  languages,
}));

export const getCountries = createAsyncThunk('get/countries', async () => {
  const res = await axios.get(`${BackendUrl}/all`);
  return formatCountries(res);
});

export const getCountry = createAsyncThunk('get/country', async (id) => {
  const res = await axios.get(`${BackendUrl}/alpha/${id}`);
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
    builder.addCase(getCountry.fulfilled, (state, action) => {
      const State = state;
      State.country = action.payload;
    });
  },
});

export default countriesSlice.reducer;
