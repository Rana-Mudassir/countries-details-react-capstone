import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BackendUrl = 'https://restcountries.com/v3.1';

const initialState = {
  countries: [],
  country: [],
};

const formatCountries = (res) => res.data.map(({
  cca3, name, capital, population,
}) => ({
  cca3,
  name,
  capital: Array.isArray(capital) ? capital[0] || '' : capital || '',
  population,
}));

export const getCountries = createAsyncThunk('get/countries', async () => {
  const res = await axios.get(`${BackendUrl}/all`);
  return formatCountries(res);
});

const formatCountry = (res) => res.data.map(({
  cca3, name, capital, population, flags, official, unMember, currencies,
  independent, region, languages, area,
}) => ({
  cca3,
  name,
  capital: Array.isArray(capital) ? capital[0] || '' : capital || '',
  population,
  flags: Object.values(flags)[0],
  official,
  unMember,
  currencies: Object.keys(currencies)[0],
  independent,
  region,
  languages: Object.values(languages)[0],
  area,
}));

export const getCountry = createAsyncThunk('get/country', async (id) => {
  const res = await axios.get(`${BackendUrl}/alpha/${id}`);
  return formatCountry(res);
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
