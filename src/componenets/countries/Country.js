import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/country.css';

function Country(props) {
  const { name, capital, population } = props;
  return (
    <>
      <div className="col-6 p-3 bg-primary text-white">
        <div>{name.common}</div>
        <div>{capital}</div>
        <div>{population}</div>
      </div>
    </>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};

export default Country;
