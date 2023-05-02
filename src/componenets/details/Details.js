import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/details.css';

function Details(props) {
  const {
    population,
    // flags,
    official,
    unMember,
    languages,
    // currencies,
    independent,
    region,
  } = props;
  return (
    <>
      <tr>
        <td>population</td>
        <td>{population}</td>
      </tr>
      {/* <tr>
        <td>population</td>
        <td>{flags}</td>
      </tr> */}
      <tr>
        <td>Official Name</td>
        <td>{official}</td>
      </tr>
      <tr>
        <td>Languages</td>
        <td>{languages}</td>
      </tr>
      <tr>
        <td>Unitaed Nations Member</td>
        <td>{unMember}</td>
      </tr>
      {/* <tr>
        <td>currencies</td>
        <td>{currencies}</td>
      </tr> */}
      <tr>
        <td>Independent</td>
        <td>{independent}</td>
      </tr>
      <tr>
        <td>Region</td>
        <td>{region}</td>
      </tr>
    </>
  );
}

Details.propTypes = {
//   flags: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  official: PropTypes.number.isRequired,
  unMember: PropTypes.number.isRequired,
  languages: PropTypes.number.isRequired,
  //   currencies: PropTypes.number.isRequired,
  independent: PropTypes.number.isRequired,
  region: PropTypes.number.isRequired,
};

export default Details;
