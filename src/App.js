import './App.css';
import { useState, useEffect } from 'react';
// import countriesDB from './countries.json';
import Navbar from '../../lab-wiki-countries/src/components/Navbar';
// import ErrorPage from './components/ErrorPage';
import CountriesList from '../../lab-wiki-countries/src/components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from '../../lab-wiki-countries/src/components/CountryDetails';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const apiUrl = `https://ih-countries-api.herokuapp.com/countries/`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(response.data);
      })
      .catch((error) => console.log(error));
  }, [apiUrl]);

  if (!countries.length) {
    console.log('loading');
    return;
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/" element={<></>} />
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
