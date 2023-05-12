import React from 'react'
import { useParams, Link } from 'react-router-dom'


const CountryDetails = ({ countries }) => {
  const { id } = useParams()
  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id
  });

  return (
    <div className="col-7">
      <h1>{foundCountry ? foundCountry.name.official : ''}</h1>
      <table className="table" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <thead style={{ width: "100%" }}>
          <img
            src={`https://flagcdn.com/w320/${foundCountry.alpha2Code.toLowerCase()}.png`}
            width="320"
            alt={foundCountry.name.official} />
        </thead>
        <tbody style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry ? foundCountry.capital : ''}</td>
          </tr>
          <tr>
            <td style={{ width: "70%" }}>Area</td>
            <td>
              {foundCountry ? foundCountry.area : ''} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{ listStyle: "none" }}>
                {foundCountry ? (
                  foundCountry.borders.map((border) => {
                    const borderCountry = countries.find((country) => {
                      return country.alpha3Code === border;
                    });
                    return (
                      <li key={borderCountry.alpha3Code}>
                        <Link to={`/${border}`}>
                          {borderCountry.name.official}
                        </Link>
                      </li>
                    )
                  })) : ''}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails