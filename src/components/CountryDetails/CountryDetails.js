import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState([]);
  const { code } = useParams();
  const foundCountry = countries.find((country) => {
    return country.alpha3Code === code;
  });
  // const url = 'https://ih-countries-api.herokuapp.com/countries';

  // useEffect(() => {
  //   fetch(`${url}/${alpha3Code}`)
  //     .then((raw) => {
  //       return raw.json();
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //       setCountry(res[0]);
  //     });
  // }, [alpha3Code]);
  console.log(foundCountry);
  return (
    <div className="col-7">
      <h1>Hello</h1>
      <h1>{foundCountry.altSpellings[2]}</h1>
      <table class="table">
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
              {foundCountry.borders.map((border) => {
                <ul>
                  <li>
                    return <Link to={`/${border}`}>{border}</Link>;
                  </li>
                </ul>;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
