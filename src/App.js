import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import countriesDB from './countries.json';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
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
  const apiUrl = `https://ih-countries-api.herokuapp.com/countries/`;
  useEffect(() => {
    async function fetchCountries() {
      try {
        const raw = await fetch(apiUrl);
        const res = await raw.json();
        setCountries(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries();
  }, [apiUrl]);

  // useEffect(() => {
  //   axios.get(apiUrl).then((response) => {
  //     setCountries(response.data);
  //   });
  // }, [apiUrl]);

  if (!countries.length) {
    console.log('load');
    return;
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route
                path="/:code"
                element={<CountryDetails countries={countries} />}
              />

              {/* <Route path="*" element={<h1>404</h1>} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
