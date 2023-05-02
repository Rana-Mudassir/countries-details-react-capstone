import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/country.css';

function Country(props) {
  const { name, capital, population } = props;
  const capitalString = Array.isArray(capital) ? capital.join(', ') : capital;
  return (
    <>
      <div className="col-6 p-3 colorbg text-white">
        <div>{name}</div>
        <div>
          <span>Capital: </span>
          {capitalString}
        </div>
        <div>
          <span>Population: </span>
          {population}
        </div>
      </div>
    </>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
