import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/country.css';
import { useNavigate } from 'react-router-dom';

function Country(props) {
  const navigate = useNavigate();

  const {
    id, name, capital, population,
  } = props;
  const capitalString = Array.isArray(capital) ? capital.join(', ') : capital;

  const getCountry = () => {
    navigate(`/detail-list/${id}`);
  };
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="col-6 p-3 colorbg text-white"
        onClick={getCountry}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            getCountry();
          }
        }}
      >
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
  id: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
