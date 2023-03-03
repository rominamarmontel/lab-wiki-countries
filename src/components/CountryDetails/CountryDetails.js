import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { code } = useParams();
  const foundCountry = countries.find((country) => {
    return country.alpha3Code === code;
  });
  return (
    <div className="col-7">
      <h1>Hello</h1>
      <h1>{foundCountry.altSpellings[2]}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  const borderCountry = countries.find((country) => {
                    return country.alpha3Code === border;
                  });
                  return (
                    <li key={borderCountry._id}>
                      <Link to={`/${border}`}>
                        {borderCountry.altSpellings[2]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
