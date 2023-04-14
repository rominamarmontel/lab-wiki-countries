import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id;
  });

  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <td>
              <img
                src={`https://flagpedia.net/data/flags/w1160/${foundCountry.alpha2Code.toLowerCase()}.webp`}
                alt={foundCountry.name.official}
                style={{ width: '350px' }}
              />
              <h1>{foundCountry.altSpellings[2]}</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
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
                  console.log(border);
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
