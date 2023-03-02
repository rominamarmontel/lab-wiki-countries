import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const { alpha3Code } = useParams();
  const url = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    fetch(`${url}/${alpha3Code}`)
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        // console.log(res);
        setCountry(res[0]);
      });
  }, [alpha3Code]);

  return (
    <div class="col-7">
      <h1>Hello</h1>
      <h1>{country.name}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <Link to={`/${country.alpha3Code}`}>
                    {country.alpha3Code.name}
                  </Link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
