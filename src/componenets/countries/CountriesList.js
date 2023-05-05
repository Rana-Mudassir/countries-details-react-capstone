import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/country/countrySlice';
import Country from './Country';
import '../../assets/countriesList.css';

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
      {/* <div className="col p-1 px-5 m3 colorbg text-white">World Countreis Details</div>
       */}
      <div className="col m3 colorbg text-white text-center fs-4 fw-bold">
        <h1 className="headingMain">
          World Countries Details
        </h1>
      </div>
      <div className="row">
        <div className="col p-1 px-5 m3 colorbg text-white">Countreis Names</div>
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
