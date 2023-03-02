import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import countriesDB from './countries.json';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  // eslint-disable-next-line
  const [countries, setCountries] = useState(countriesDB);
  // const allCountries = (country) => {
  //   setCountries([...countries]);
  // };

  // useEffect(() => {
  //   fetch(`/`)
  //     .then((raw) => {
  //       return raw.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setCountries(res[0]);
  //     });
  // }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            {countries.map((country) => {
              return <CountriesList country={country} />;
            })}
            <Routes>
              {/* <Route path="/" element={<CountriesList />}> */}
              <Route path="/:country.alpha3Code" element={<CountryDetails />} />
              {/* </Route> */}
              {/* <Route path="/countryDetails" element={<CountryDetails />}>
                    <Route path=":id" element={<CountryDetails />} />
                  </Route> */}
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
