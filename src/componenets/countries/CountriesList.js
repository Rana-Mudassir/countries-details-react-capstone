import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/country/countrySlice';
import Country from './Country';
import '../../assets/country.css';

function CountiesList() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.country.countries);
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, []);
  return (
    <>
      <div className="row">
        <div className="col p-6 colorbg text-white">Countreis</div>
      </div>
      <div className="row">
        {countries?.map((country, index) => (
          <Country
            index={index}
            key={country.cca3}
            id={country.cca3}
            name={country.name.common}
            capital={country.capital}
            population={country.population}
          />
        ))}
      </div>
    </>
  );
}

export default CountiesList;
