import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../redux/country/countrySlice';
import Details from './Details';

function DetailsList() {
  const { id } = useParams();
  //   console.log('params', id);

  const dispatch = useDispatch();
  const { country } = useSelector((store) => store.country);
  useEffect(() => {
    if (id) {
      dispatch(getCountry(id));
    }
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <h1>My First Bootstrap Page</h1>
          </div>
        </div>
        <table className="table table-striped">
          <tbody>
            {country?.map((country, index) => (
              <Details
                index={index}
                key={country.cca3}
                population={country.population}
                flags={country.flags}
                official={country.name.official}
                unMember={country.unMember}
                currencies={country.currencies}
                independent={country.independent}
                region={country.region}
                languages={country.languages[1]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailsList;
