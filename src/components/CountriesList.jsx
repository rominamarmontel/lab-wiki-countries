import React from 'react'
import { Link } from 'react-router-dom'
const CountriesList = ({ countries }) => {

  return (
    <div className="col-5" style={{ maxHeight: '100vh', overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} style={{ width: '20%', height: '20%' }} />
                {country.name.common}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CountriesList